import React from 'react'
import images from "../Assets/logo.svg";
import "./Order.css"
import {useState, useEffect} from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

const initialForm = {
  isim: "",
  size:"",
  hamur:"",
  malzeme:[],
  not:""
}


export default function Order() {
  const  [form, setForm]= useState(initialForm);
  const [disableButton, setDisableButton] = useState(true);
  const [selectedMalzemeCount, setSelectedMalzemeCount] = useState(0);
const [count, setCount] = useState(1)
const history= useHistory();

const isOrderValid = () => {
  return (
    form.isim.lengt > 2 &&
      form.size !== '' &&
      form.hamur !== '' &&
      form.malzeme.length >= 4 &&
      form.malzeme.length <= 10
  );
};

  useEffect(() => {
    const selectedMalzemeCount = form.malzeme.length;
    setDisableButton(selectedMalzemeCount < 4 || selectedMalzemeCount > 10 );
    setSelectedMalzemeCount(form.malzeme.length);
  }, [form.malzeme]);


 const handleChange = (event)=>{
  const {type, name, checked, value}=event.target;
  if(type==="radio"){
    setForm({ ...form, [name]: value });
  }else if(type==="select-one"){
    setForm({ ...form, [name]: value });
  }else if(type==="checkbox"){
if (checked) {
      setForm({...form, malzeme: [...form.malzeme, value],});
 } else {
      setForm({...form,malzeme: form.malzeme.filter((index) => index !== value),});
 }
  }else if(name==="not" || name==="isim" ){
  
    setForm({ ...form, not: value });
  }
 };
 console.log("Boyut:", form.size +" "+ "Hamur:", form.hamur +" "+ "Malzemeler:", form.malzeme +" " +"Sipariş notu:", form.not);
 
 const increment = () => {
  setCount((prevCount) => prevCount + 1);
};
const decrement = () => {
  if (count > 1) {
    setCount((prevCount) => prevCount - 1);
  }
};
const handleSubmit = (event) => {

  event.preventDefault();

  axios.post("https://reqres.in/api/users", form)
  .then((response) => {
      console.log("data", response.data)

      setForm(initialForm)
  })

  history.push("/SiparisinizAlindi")
}


 return (
  <>
   <header class="header"><br></br>
    <img src={images}></img>
  <br></br><br></br>
  <br></br>
  <div class="bar">
    <a href="/HomePage">Anasayfa - </a>
    <a href="/Order">Sipariş Oluştur - </a>
    <a href="/SiparisinizAlindi">Onaylandı</a>
    </div><br></br>
   </header>
   <div class="top">

   <div CLASS="başlık-1">
  <p>Position Absolute Acı Pizza</p>
  </div>

<div>
  <div class="fiyat">
  <p>85.50₺</p>     <div class="seksenbeş-bölümü"><p>4.9</p><p>(200)</p></div>
  </div>
 <p id="info">Frontent Dev olarak hala positio:absolute kullanıyorsan bu çok acı bir pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak  odun ateşinde  bir fırında yüksek sıcaklıkta pişirilen,genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı  hamurdan oluşan İtalyan kçkenli lezzetli bir yemektir. Küçük bir pizza bazen pizzetta denir.</p>
  </div>

<form onSubmit={handleSubmit}>
  <div class="radyo-select">
<div class = "radyo">
  <h3>Boyut Seç*</h3>
<input type="radio" id="Küçük" name="size" value="küçük" onChange={handleChange}/>
  <label for="html">Küçük</label><br></br><br></br>
  <input type="radio" id="Orta" name="size" value="orta" onChange={handleChange}/>
  <label for="html">Orta</label><br></br><br></br>
  <input type="radio" id="Büyük" name="size" value="büyük" onChange={handleChange}/>
  <label for="html">Büyük</label><br></br><br></br>
</div>

<div class="select-materyal">
<h3>Hamur Seç*</h3>
<label for="hamur">Hamur Seç:  </label>
<select name="hamur" id="hamur" value={form.hamur} selected onChange={handleChange}>
<option   disabled="Hamur Seç" >Hamur Seç</option>
  <option value="Extra İnce">Extra İnce</option>
  <option value="İnce">İnce</option>
  <option value="Normal">Normal</option>
  <option value="Kalın">Kalın</option>
  <option value="Ekstra Kalın">Ekstra Kalın</option>
</select>
</div>
</div>
<div>

<h3>Ek Malzemeler</h3>
<p>En Fazla 10 Malzeme Seçebilirsiniz.5₺</p>
<div class="check-box">

<div class="box-1">
<input type="checkbox" id="Pepperoni" name="malzeme" value="Pepperoni" onChange={handleChange}/>
<label for="Pepperoni">Pepperoni</label><br></br><br></br>
<input type="checkbox" id="Tavuk Izgara" name="malzeme" value="Tavuk Izgara" onChange={handleChange}/>
<label for="Tavuk Izgara">Tavuk Izgara</label><br></br><br></br>
<input type="checkbox" id="Mısır" name="malzeme" value="Mısır"  onChange={handleChange}/>
<label for="Mısır">Mısır</label><br></br><br></br>
<input type="checkbox" id="Sarımsak" name="malzeme" value="Sarımsak" onChange={handleChange}/>
<label for="Sarımsak">Sarımsak</label><br></br><br></br>
<input type="checkbox" id="Ananas" name="malzeme" value="Ananas" onChange={handleChange}/>
<label for="Ananas">Ananas</label><br></br><br></br>
</div>

<div class ="box-2">
<input type="checkbox" id="Sosis" name="malzeme" value="Sosis" onChange={handleChange}/>
<label for="Sosis">Sosis</label><br></br><br></br>
<input type="checkbox" id="Soğan" name="malzeme" value="Soğan" onChange={handleChange}/>
<label for="Soğan">Soğan</label><br></br><br></br>
<input type="checkbox" id="Sucuk" name="malzeme" value="Sucuk" onChange={handleChange}/>
<label for="Sucuk">Sucuk</label><br></br><br></br>
<input type="checkbox" id="Biber" name="malzeme" value="Biber" onChange={handleChange}/>
<label for="Biber">Biber</label><br></br><br></br>
<input type="checkbox" id="Kabak" name="malzeme" value="Kabak" onChange={handleChange}/>
<label for="Kabak">Kabak</label><br></br><br></br>
</div>

<div class ="box-3">
<input type="checkbox" id="Kanada Jambonu" name="malzeme" value="Kanada Jambonu" onChange={handleChange}/>
<label for="Kanada Jambonu">Kanada Jambonu</label><br></br><br></br>
<input type="checkbox" id="Domates" name="malzeme" value="Domates" onChange={handleChange}/>
<label for="Domates">Domates</label><br></br><br></br>
<input type="checkbox" id="Jalepeno" name="malzeme" value="Jalepeno" onChange={handleChange} />
<label for="Jalepeno">Jalepeno</label><br></br><br></br>
<input type="checkbox" id="Sucuk" name="malzeme" value="Sucuk" onChange={handleChange}/>
<label for="Sucuk">Sucuk</label><br></br><br></br>
</div>
</div>


</div>
<div class="footer">
<label for="isimAlani" >Adınız:</label>
<input id="isimAlani" placeholder = "Adınız..."/>
<p class="siparis-notu">Sipariş Notu</p>
<div>
  <textarea name="not" id="not" cols="70" rows="3" value={form.not} onChange={handleChange}
placeholder = "Siparişine Eklemek İstediğiniz Bir Not Var Mı?"></textarea>
<br></br><br></br><hr /><br></br><br></br>
</div>
<div class="siparis-ver">
<div class="butonlar">
<button class="buton" type='button' onClick={decrement}>-</button><div class="buton-div">{count}</div><button class="buton" type='button' onClick={increment}>+</button></div>
<div className='order-card'>
<div className='siparis-toplam'> <h3>Sipariş Toplamı</h3>
<div className='siparis-ust'>
<p>Seçimler</p>
<p>{count * (selectedMalzemeCount * 5)}TL</p>
</div>
<div className='siparis-alt'>
<p>Toplam</p>
<p>{((selectedMalzemeCount * 5) + 85.50) * count}TL</p>
</div>
</div>
<div>
<button class="siparis-button" type='submit' disabled={!isOrderValid()}>Sipariş Ver</button>
</div>
</div>
</div>



</div>
</form>
 
</div>
 
   
   </>
  )
}

