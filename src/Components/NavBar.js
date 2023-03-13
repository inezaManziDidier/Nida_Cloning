 import {Component} from 'react'
 import ururango from '../Images/ururango.jpg'


class NavBar extends Component{
   render(){
    return(
       <div className='NavBar'>
        
{/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="flex items-center">
            <a href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
</nav> */}
<nav class="bg-gray-50 dark:bg-gray-700">
     
    <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
        <div class="flex items-center">
        <a href="https://flowbite.com" class="flex items-center">
            <img src={ururango} class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NIDA</span>
        </a>
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium p-10">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline P-4" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">ABOUT NIDA</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">SERVICES</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">UPDATES</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">PUBLICATION</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">FAQS</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

       </div>
    )
   }
}

export default NavBar