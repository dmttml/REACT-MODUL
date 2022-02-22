
import React, { useState } from "react"; // React i sayfaya import eder.

const App = () => { // Olusturulan fonksiyonu tanimlar.

  let time = new Date().toLocaleTimeString() //guncel saati gosterir

  const [ctime,setCtime] = useState(time);

  const  UpdateTime = () => { //saati guncellemizi saglayan degiskeni tanimlar.
    time = new Date().toLocaleTimeString();
    setCtime(time)
  };
    setInterval(UpdateTime,) // saati ekranda otomatik olarak  gosteriyor
  return (
    <>
    <h1 className="head">{ctime}</h1>
    </>
  )
}
export default App;
