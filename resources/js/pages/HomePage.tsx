import React, { useState } from 'react'
import ImageOne from '@/images/image-1.jpeg';
import ImageTwo from '@/images/image-2.jpeg';
import ImageThree from '@/images/image-3.jpeg';
import ImageFour from '@/images/image-4.jpeg';
import ImageFive from '@/images/image-5.jpeg';
import ImageSeven from '@/images/image-7.jpeg';
import ImageEight from '@/images/image-8.jpeg';
import HeaderComponent from '@/components/HeaderComponent';
import HeroComponent from '@/components/HeroComponent';
import AboutComponent from '@/components/AboutComponent';
import CommandComponent from '@/components/CommandComponent';
import WhyShoseCusraComponent from '@/components/WhyShoseCusraComponent';
import AdditionalComponent from '@/components/AdditionalComponent';
import CtaComponent from '@/components/CtaComponent';
import FooterComponent from '@/components/FooterComponent';
import BeforAfterComponent from '@/components/BeforAfterComponent';
import PackComponent from '@/components/PackComponent';
import BeforImage from "@/images/befor-after/befor.jpg";
import AfterImage from "@/images/befor-after/after.jpg";

const HomePage = () => {
  const [formData, setFormData] = useState({ nom: '', telephone: '', message: '' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pistachio-50 to-purple-50">
      <HeaderComponent />

      <HeroComponent ImageOne={ImageOne}/>

      <AboutComponent ImageTwo={ImageTwo} />

      <BeforAfterComponent
        BeforImage={BeforImage}
        AfterImage={AfterImage}
        beforeLabel="Jour 1"
        afterLabel="Jour 30"
        className="max-w-2xl"
      />


      <PackComponent
        title="Soin de Peau Premium"
        price={299}
        originalPrice={399}
        features={[
          'Traitement de nettoyage en profondeur',
          'Application de sérum anti-âge',
          'Thérapie hydratante'
        ]}
        image="/path/to/image.jpg"
        popular={true}
        description="Pack de soins complet"
        duration="30 jours"
      />



      <CommandComponent formData={formData} setFormData={setFormData} ImageThree={ImageThree}/>

      <WhyShoseCusraComponent ImageFour={ImageFour} ImageFive={ImageFive} ImageThree={ImageThree} ImageSeven={ImageSeven}/>

      <AdditionalComponent ImageEight={ImageEight}/>

      <CtaComponent />

      <FooterComponent />
    </div>
  )
}

export default HomePage