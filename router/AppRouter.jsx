import React from 'react'
import MainFashion from '../Fashion/mainFashion';
import MainHome from '../Home/mainHome';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MainCosmetics from '../cosmetics/mainCosmetics';
import Mainjewelry from '../jewelry/Mainjewelry';
import MainShoes from '../Shoes/MainShoes';
import Ladiespage from '../pages/Ladiespage';
import Kurties from '../pages/kurties';
import Suits from '../pages/suits';
import Tops from '../pages/tops';
import Sarees from '../pages/sarees';
import Menspage from '../pages/menspage';
import Tshirts from '../pages/tshirts';
import Shirts from '../pages/shirts';
import Pendants from '../pages/Pendants';
import Lockets from '../pages/Lockets';
import Jewels from '../pages/Jewelset';
import Mangalsutra from '../pages/mangalsutra';
import Necklaces from '../pages/Necklaces';
import Jhumke from '../pages/Jhumke';
import Golds from '../pages/GoldEar';
import Earings from '../pages/earings';
import Drops from '../pages/drops';
import Studs from '../pages/Studs';
import Solitaire from '../pages/solitaire';
import Gemstone from '../pages/gemstone';
import Dailyring from '../pages/dailyring';
import Menring from '../pages/menring';
import Rings from '../pages/rings';
import Bangles  from '../pages/bangles';
import Bracelet from '../pages/bracelet';
import Ringbracelet from '../pages/ringbracelet';
import Watch from '../pages/watch';
import Hands from '../pages/hands';
import Login from '../pages/loginPage';
import Cart from '../pages/cart';
import Jeans from '../pages/jeans';
import Coats from '../pages/coats';
import Kidspage from '../pages/Kidspage';
import Frock from '../pages/Frock';
import Indowest from '../pages/Indowest';
import Sweat from '../pages/sweatshirt';
import Ethnic from '../pages/ethnic';
import Footer from '../pages/Footer';
import Message from '../pages/Message';
import Liners from '../pages/Eyeliner';
import Shadows from '../pages/EyeShadow';
import Primers from '../pages/Eyeprimer';
import Mascaras from '../pages/Mascara';
import Eyes from '../pages/Eyes';
import Lipliners from '../pages/Lipliner';
import Lipsticks from '../pages/Lipstick';
import Balms from '../pages/Lipbalm';
import Gloss from '../pages/Lipgloss';
import Lips from '../pages/Lips';
import Nails from '../pages/nails';
import Removes from '../pages/Nailremove';
import Cares from '../pages/nailcare';
import Polishs from '../pages/NailPolish';
import Cleans from '../pages/Cleansers';
import Creams from '../pages/Cream';
import Masks from '../pages/mask';
import Serums from '../pages/Serums';
import Face from '../pages/face';
import Sandals from '../pages/sandals';
import Slippers from '../pages/Slipperwomen';
import Sneakers from '../pages/Sneakers';
import Kidsfoot from '../pages/kidsfoot';
import Sneaks from '../pages/kidsneakers';
import Clogs from '../pages/clogs';
import Ladiesfoot from '../pages/ladiesfoot';
import Mensfoot from '../pages/Menfoot';
import Slipss from '../pages/slipperkids';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHome/>}/>
          <Route path='/fashion' element={<MainFashion/>}/>
          <Route path='/cosmetics' element={<MainCosmetics/>}/>
          <Route path='/jewellery' element={<Mainjewelry/>}/>
          <Route path='/footwear' element={<MainShoes/>}/>
          <Route path='/LadiesPage' element={<Ladiespage/>}/>
          <Route path='/kurties' element={<Kurties/>}/>
          <Route path='/suits' element={<Suits/>}/>
          <Route path='/tops' element={<Tops/>}/>
          <Route path='/sarees' element={<Sarees/>}/>
          <Route path='/Menspage' element={<Menspage/>}/>
          <Route path='/shirts' element={<Shirts/>}/>
          <Route path='/tshirts' element={<Tshirts/>}/>
          <Route path='/pendants' element={<Pendants/>}/>
          <Route path='/lockets' element={<Lockets/>}/>
          <Route path='/jewels' element={<Jewels/>}/>
          <Route path='mangalsutra' element={<Mangalsutra/>}/>
          <Route path='/Necklaces' element={<Necklaces/>}/>
          <Route path='/Jhumke' element={<Jhumke/>}/>
          <Route path='/golds' element={<Golds/>}/>
          <Route path='/studs' element={<Studs/>}/>
          <Route path='/drops' element={<Drops/>}/>
          <Route path='/earings' element={<Earings/>}/>
          <Route path='/solitaire' element={<Solitaire/>}/>
          <Route path='/Menring' element={<Menring/>}/>
          <Route path='/Dailyring' element={<Dailyring/>}/>
          <Route path='/gemstone' element={<Gemstone/>}/>
          <Route path='/rings' element={<Rings/>}/>
          <Route path='/hands' element={<Hands/>}/>
          <Route path='/ringbracelet' element={<Ringbracelet/>}/>
          <Route path='/bracelet' element={<Bracelet/>}/>
          <Route path='/bangles' element={<Bangles/>}/>
          <Route path='/watch' element={<Watch/>}/>
          <Route path='loginPage' element={<Login/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/coats' element={<Coats/>}/>
          <Route path='/jeans' element={<Jeans/>}/>
          <Route path='sweatshirts' element={<Sweat/>}/>
          <Route path='frock' element={<Frock/>}/>
          <Route path='ethnic' element={<Ethnic/>}/>
          <Route path='indowest' element={<Indowest/>}/>
          <Route path='Kidspage' element={<Kidspage/>}/>
          <Route path='Footer' element={<Footer/>}/>
          <Route path='message' element={<Message/>}/>
          <Route path='mascara' element={<Mascaras/>}/>
          <Route path='eyes' element={<Eyes/>}/>
          <Route path='eyeshadow' element={<Shadows/>}/>
          <Route path='eyeprimer' element={<Primers/>}/>
          <Route path='eyeliner' element={<Liners/>}/>
          <Route path='lips' element={<Lips/>}/>
          <Route path='lipliner' element={<Lipliners/>}/>
          <Route path='lipgloss' element={<Gloss/>}/>
          <Route path='lipstick' element={<Lipsticks/>}/>
          <Route path='lipbalm' element={<Balms/>}/>
          <Route path='nails' element={<Nails/>}/>
          <Route path='nailpolish' element={<Polishs/>}/>
          <Route path='nailcare' element={<Cares/>}/>
          <Route path='nailremove' element={<Removes/>}/>
          <Route path='mask' element={<Masks/>}/>
          <Route path='serums' element={<Serums/>}/>
          <Route path='cream' element={<Creams/>}/>
          <Route path='cleansers' element={<Cleans/>}/>
          <Route path='face' element={<Face/>}/>
          <Route path='sandals' element={<Sandals/>}/>
          <Route path='slipperwomen' element={<Slippers/>}/>
          <Route path='Sneakers' element={<Sneakers/>}/>
          <Route path='kidsneakers' element={<Sneaks/>}/>
          <Route path='clogs' element={<Clogs/>}/>
          <Route path='menfoot' element={<Mensfoot/>}/>
          <Route path='ladiesfoot' element={<Ladiesfoot/>}/>
          <Route path='kidsfoot' element={<Kidsfoot/>}/>
          <Route path='slipperkids' element={<Slipss/>}/>

        </Routes>
        
        
    </BrowserRouter>
  )
}

export default AppRouter;