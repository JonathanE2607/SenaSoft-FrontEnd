import { Menu, MenuButton, MenuItem } from '@headlessui/react'
import { GiPlantRoots } from "react-icons/gi";
import { LuThermometerSun } from "react-icons/lu";
import { GiFactory } from "react-icons/gi";
import Header from "../components/Header";
import imgGlobant from "../assets/imgGlobant.png";
import imgGeotermica from "../assets/imgGeotermica.png";
import Footer from './Footer';

export default function LandingPage(){
    return(
        <>

		<div className='bg-fondo'>
			<div className='p-3'>
				<Header />
		</div>
 <section className="bg-fondo dark:bg-gray-900">
	<div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
		<div className="mr-auto place-self-center lg:col-span-7">
			<h1
				className="max-w-2xl mb-4 text-4xl text-white font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
				Nombre de la empresa</h1>
				<p className="text-xl text-white">Divierte haciendo retos mientras ayudas a fundaciones para la conservacion de  nuestro medio ambiente.</p><br />
				<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-5">
          <br />
					
	
				</div>
		</div>
		<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
			<img className="rounded-full" src="https://www.shutterstock.com/shutterstock/photos/1092120809/display_1500/stock-photo-climate-change-and-global-warming-concept-burning-leaf-at-land-of-cracked-earth-metaphor-drought-1092120809.jpg" alt="hero image" />
    </div>
		</div>
</section>
</div>



<section className="bg-fondo2 dark:bg-gray-900">
	<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
		<div className="max-w-screen-md mx-auto mb-12 text-center lg:mb-12">
			<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Conoce sobre distintos temas como.</h2>
			
		</div>
		<div className="lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mt-6 ">
           
			<div
				className="flex flex-col max-w-lg  p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
				
				<div className='w-28 h-28 rounded-xl bg-fondo ml-28 opacity-55'>
				<LuThermometerSun className='w-20 h-20 mt-4 ml-4'  style={{ color: '#008000' }} />
					</div>
				<div className="flex items-baseline justify-center my-8">
				
					<span className="mr-2 text-3xl font-extrabold">Calentamiento global.</span>
				</div>

			     <div>
					
					<h2>
					es el aumento de la temperatura de la Tierra, causado principalmente por la acumulación de gases de efecto invernadero debido a actividades humanas.
					</h2>
				 </div>
				 <a href="#"
					className="text-fondo  mt-4 ">
					Leer mas → </a>
			</div>

			<div
				className="flex flex-col max-w-lg  p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
					<div className='w-28 h-28 rounded-xl bg-fondo ml-28 opacity-55'>
					<GiFactory className='w-20 h-20 mt-4 ml-4'  style={{ color: '#008000' }} />
					</div>
				<div className="flex items-baseline justify-center my-8">
					<span className="mr-2 text-3xl font-extrabold">Huella de carbono.</span>
				</div>

			     <div>
					<h2>
					es la cantidad total de emisiones de gases de efecto invernadero, especialmente dióxido de carbono, que se generan directa o indirectamente por una persona, organización o actividad.					</h2>
				 </div>
			
				 <a href="#"
					className="text-fondo  mt-4 ">
					Leer mas → </a>
					
			</div>

			<div
				className="flex flex-col max-w-lg  p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
					
					<div className='w-28 h-28 rounded-xl bg-fondo ml-28 opacity-55'>
					<GiPlantRoots className='w-20 h-20 mt-4 ml-4'  style={{ color: '#008000' }} />
					</div>
				<div className="flex items-baseline justify-center my-8">
					<span className="mr-2 text-3xl font-extrabold">Plantacion de arboles.</span>
				</div>

			     <div>
					<h2>
					contribuye a la salud del medio ambiente. Los árboles absorben dióxido de carbono y producen oxígeno, mejorando la calidad del aire.					</h2>
				 </div>
				<a href="#"
					className="text-fondo mt-4 ">
					Leer mas → </a>
			</div>
		</div>
	</div>
</section>

<div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
		<div className="mr-auto place-self-center lg:col-span-7">
			<h1
				className="max-w-2xl mb-4 text-slate-900 text-4xl text- font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
				Estrategia de descarbonización</h1>
				<p className="text-lg text-slate-800"><p className="text-xl text-slate-800">Utilizar electricidad 100% renovable y convertirse en una empresa neutra en carbono</p><br />
				Globant está trabajando país por país para reducir las emisiones de carbono comprando electricidad que proviene de fuentes renovables. Además compensamos el resto de nuestra huella de carbono con inversiones en proyectos innovadores que representan nuestros valores.</p><br />
				<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-5">
          <br />
					
	
				</div>
		</div>
		<div className="hidden lg:mt-0 lg:col-span-5 lg:flex ml-2">
			<img className="rounded-xl" src={imgGlobant} alt="hero image" />
    </div>
		</div>

		
		<div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
		
		<div className="hidden lg:mt-0 lg:col-span-5 lg:flex mr-4">
			<img className="rounded-xl" src={imgGeotermica} alt="hero image" />
        </div>

		<div className="mr-auto place-self-center lg:col-span-7">
			<h1
				className="max-w-2xl mb-4 text-slate-900 text-4xl text- font-extrabold leading-none mb-4 tracking-tight md:text-5xl xl:text-6xl dark:text-white">
				Energía geotérmica de muy baja entalpia</h1>
				<p className="text-lg text-slate-800">La energia geotermica de muy baja entalpia es una de las fuentes de energia menos conocida pero de mayor eficiencia. Se trata de una energia de produccion continua y gestionable que se encuentra disponible bajo la superficie de la tierra a una temperatura constante todo el año.</p><br />
				
		</div>
		</div>
        <Footer />
        </>
    );
}