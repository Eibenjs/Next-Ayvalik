import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import TextField from '../../components/ui/TextField'
import { useRouter } from 'next/router'
import { logout, db } from '../../components/firebase/firestoreApp'
import {
  collection,
  addDoc,
  getDocs,
  query,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { data } from 'autoprefixer'
import toast from 'react-hot-toast'
import ImageUi from '../../components/ui/ImageUi'
import MainItem from '../../components/ui/MainItem'

const Admin = (props) => {
  const [user, setUser] = useState(useSelector((state) => state.auth.user))
  const imageRef = useRef()
  const router = useRouter()

  const logoutHandler = () => {
    logout()
    router.push('/')
  }

  const fetchDataImage = async (value) => {
    try {
      await addDoc(collection(db, 'images'), {
        link: value,
      })
    } catch (er) {
      toast.error(er)
    }
  }

  const addDataMain = async (value) => {
    console.log(value)
    try {
      await addDoc(collection(db, 'main'), {
        trbaslik: value.trbaslik,
        tr: value.tr,
        enbaslik: value.enbaslik,
        en: value.en,
        image: value.image,
      })
      toast.success('eklendi')
      router.push('/admin')
    } catch (er) {
      toast.error(er)
    }
  }

  const onDeleteImage = async (key) => {
    try {
      await deleteDoc(doc(db, 'images', key))
      toast.success('silindi')
      router.push('/admin')
    } catch (error) {
      toast.error(error)
    }
  }

  const onDeleteMainItem = async (key) => {
    try {
      await deleteDoc(doc(db, 'main', key))
      toast.success('silindi')
      router.push('/admin')
    } catch (error) {
      toast.error(error)
    }
  }

  const isImgLink = (url) => {
    if (typeof url !== 'string') {
      return false
    }
    return (
      url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) !== null
    )
  }

  const addDataImage = (e) => {
    e.preventDefault()
    if (imageRef.current.value.length < 1) {
      toast.error('link gir')
      return
    }
    const bool = isImgLink(imageRef.current.value)
    if (bool) {
      try {
        fetchDataImage(imageRef.current.value)
        toast.success('basariyla eklendi')
        router.push('/admin')
      } catch (e) {
        toast.error('bir hata olustu')
        console.error('Error adding document: ', e)
      }
    } else {
      toast.error('resim linki degil')
    }
    e.target.reset()
  }
  useEffect(() => {
    if (user === false) {
      router.push('/')
    }
  }, [router, user])

  return user ? (
    <div className="w-full h-[100vh] bg-black">
      <button className="p-4 text-black bg-zinc-50" onClick={logoutHandler}>
        logout
      </button>
      <div className="text-white mt-6">
        <form onSubmit={addDataImage}>
          <input
            placeholder="image link"
            className="text-black p-2"
            ref={imageRef}
            type="text"
          />
          <button type="submit" className="p-2  bg-slate-700">
            Ekle
          </button>
        </form>
        {props.images.map((imItem) => {
          return (
            <ImageUi
              onDelete={onDeleteImage}
              propKey={imItem[1]}
              key={imItem[1]}
            >
              {imItem[0].link}
            </ImageUi>
          )
        })}
      </div>
      <div className="text-white bg-black mt-12">
        <Formik
          initialValues={{
            trbaslik: '',
            tr: '',
            enbaslik: '',
            en: '',
            image: '',
          }}
          validationSchema={Yup.object({
            trbaslik: Yup.string().required('paragraf girin'),
            tr: Yup.string().required('paragraf girin'),
            enbaslik: Yup.string().required('paragraf girin'),
            en: Yup.string().required('paragraf girin'),
            image: Yup.string().required('image link pls'),
          })}
          onSubmit={(values, { resetForm }) => {
            const bool = isImgLink(values.image)
            if (!bool) {
              toast.error('image link degil')
              return
            }
            resetForm()
            addDataMain(values)
          }}
        >
          {(formik) => (
            <div>
              <h1>For Main Page abi</h1>

              <Form>
                <TextField label="TRBASLIK" name="trbaslik" type="text" />
                <TextField label="TR" name="tr" type="text" />
                <TextField label="ENBASLIK" name="enbaslik" type="text" />
                <TextField label="EN" name="en" type="text" />
                <TextField label="Image link" name="image" type="text" />
                <button className="bg-zinc-100 p-2 text-black" type="submit">
                  Ekle
                </button>
              </Form>
            </div>
          )}
        </Formik>
        <div className="w-full md:w-1/2 bg-zinc-200">
          {props.main.map((itemMain) => {
            return (
              <MainItem
                key={itemMain[1]}
                propKey={itemMain[1]}
                onDelete={onDeleteMainItem}
                values={itemMain[0]}
              />
            )
          })}
        </div>
      </div>
    </div>
  ) : (
    <div>oops</div>
  )
}

export const getStaticProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, 'images'))
  const querySnapshot2 = await getDocs(collection(db, 'main'))
  const images = []
  const main = []
  querySnapshot.forEach((m) => images.push([m.data(), m.id]))
  querySnapshot2.forEach((m) => main.push([m.data(), m.id]))
  return {
    props: {
      images,
      main,
    },
  }
}

export default Admin
