import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {

  const [books, setBooks] = useState(null)

  // useSearchParams() iki değer döndürür
  // 1- url'de ekli olan arama paramtrelleri
  // 2- parametrelier değiştirmeye yarayan fonksiyon
  const [searchParams, setSearchParams] = useSearchParams();

  //  urldeki'arama paramtresine erişme
   const order = searchParams.get("sirala")
   const query = searchParams.get("aramaTerimi")
  

  // api'ye istek atarken istediğimiz
  // sıralamıyı belirten ayarlar
  const options = {
    params: {
      _sort : "title",
      _order : order === "a-z" ? "asc" : "desc",
      q : query,
    }
  }

  // bileşen ekrana baısldığı anda ve sıralama
  // değiştiğinde kitap verileri için istek at
  useEffect(()=>{
    axios.get("http://localhost:3070/books", options)
    .then((res) => setBooks(res.data))
    .catch((err) => console.log(err))
  },[order, query]);

  // url'deki aram parametrelieini değiştirme
  const handleOnchange = (e) => {
    searchParams.set("sirala", e.target.value)
    setSearchParams(searchParams)
  }

   // form gönderildiğinde
  const handleSubmit = (e) => {
    e.preventDefault()
    searchParams.set("aramaTerimi", e.target[0].value )
    setSearchParams(searchParams)

  }

  return (
    <div>
      <h3 className='mx-5 mt-3'>{books?.length} Kitap bulundu</h3>
      <div className='d-flex align-items-center'>
        

        <div className='m-5 fs-5'>
          <label  >Kitapları isme göre sırala</label>
          <select className='mx-3 px-5 rounded' onChange={handleOnchange} >
            <option>a-z</option>
            <option>z-a</option>
          </select>
        </div>

        <div className='m-5 fs-5 '>
          <form onSubmit={handleSubmit} className='d-flex align-items-center'>
            <input className='rounded' type="text" placeholder='Kitap ismi giriniz' />
            <button className='btn btn-primary'>Ara</button>
          </form>
        </div>


      </div>
    
    <div className='d-flex flex-wrap justify-content-center  gap-5'>
      {!books && <p>Loading!!!</p>}
      {
        books?.map((book) => 
          <Card key={book.id} book={book} />
        )
      }
    </div>
    </div>
  )
}

export default ProductsPage