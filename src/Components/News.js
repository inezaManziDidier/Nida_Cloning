import { Component } from "react";
import news1 from '../Images/news1.jpeg'
import news2 from '../Images/news2.jpg'
import news3 from '../Images/news3.jpg'
class CardNews extends Component{
    render(){
        return(
          <div className="CardNews">
          <div>

<div className="mt-8 mb-5 justify-right">
   <h1><strong>LATEST NEWS</strong></h1>
</div>

       <div className="flex">
           
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="rounded-t-lg" src={news1} alt="......."/>
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HIZIHIJWE UMUNSI NYAFURIKA WAHARIWE IRANGAMIMERERE
</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Tariki 10 Kanama buri mwaka hizihizwa umunsi nyafurika wahariwe irangamimerere. Ku rwego rw’Igihugu, uyu munsi wizihirijwe mu karere ka Nyagatare mu… -….</p>
<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Read more
   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</div>

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
     <img class="rounded-t-lg" src={news2} alt="........"/>
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SECTORS’ CIVIL REGISTRARS ARE BEING TRAINED ON ADOPTION AND RECOGNITION IN CRVS
</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">From 1st to 3rd august 2022, sectors’ civil registrars and registration Officers are being trained to equip them with required skills about the…</p>
<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Read more
   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</div>

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="rounded-t-lg" src={news3} alt="............."/>
   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ICYUMWERU CYAHARIWE INDANGAMUNTU
 



</h5>
</a>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kuva tariki ya 14/02/2022 kugeza tariki ya 11/03/2022, Abakozi b`Ikigo cy`Igihugu Gishinzwe Irangamuntu (NIDA), bazaza mu Turere mu Mirenge imwe…</p>
<a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Read more
   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
</div>
       </div>
       <div  className="Card mt-5">
 <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
   Explore more
   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
 </div>
       </div>
          </div>  
        )
    }
}

export default CardNews