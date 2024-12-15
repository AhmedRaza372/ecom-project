// // pages/index.js or any other component where you want to use this code

// import Image from 'next/image'

// const DesktopView = () => {
//   return (
//   <div className="EcommerceDesktop1 h-96 bg-white flex-col justify-start items-start inline-flex">
//     <div className="DesktopShopHeader1 w-96 h-96 relative bg-neutral-50">
//       <div className="Background w-96 h-96 left-0 top-0 absolute">
//       <img className="HeroCover2 w-96 h-96 left-0 top-0 absolute" src="/images/carousel1.jpg" alt="Carousel Image" />
//         <div className="Filter w-96 h-96 left-0 top-0 absolute bg-black/50" />
//       </div>
//       <div className="NavbarStyle8NavbarLight h-32 pb-2 left-0 top-0 absolute bg-white flex-col justify-start items-start gap-3 inline-flex">
//         <div className="NavbarDark self-stretch h-14 pt-2 pb-0.5 bg-slate-800 justify-center items-center inline-flex">
//           <div className="CollapseNavbarCollapse w-96 self-stretch justify-center items-center inline-flex">
//             <div className="Container grow shrink basis-0 self-stretch justify-between items-start inline-flex">
//               <div className="Row h-11 px-6 justify-between items-start flex">
//                 <div className="ColMd4 justify-start items-center gap-2.5 flex">
//                   <div className="BtnSm20 p-2.5 rounded justify-start items-center gap-1 flex">
//                     <div className="IcnSettingsIcnXs w-4 h-4 justify-center items-center flex" />
//                     <div className="H6 text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">(225) 555-0118</div>
//                   </div>
//                   <div className="BtnSm20 p-2.5 rounded justify-start items-center gap-1 flex">
//                     <div className="IcnSettingsIcnXs w-4 h-4 py-0.5 justify-center items-center flex" />
//                     <div className="H6 text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">michelle.rivera@example.com</div>
//                   </div>
//                 </div>
//                 <div className="ColMd4 p-2.5 justify-start items-start gap-2.5 flex">
//                   <div className="H6 text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Follow Us  and get a chance to win 80% off</div>
//                 </div>
//                 <div className="ColMd4 p-2.5 justify-start items-start gap-2.5 flex">
//                   <div className="H6 text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Follow Us  :</div>
//                   <div className="SocialMedia pr-px justify-center items-start gap-1.5 flex">
//                     <div className="A self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
//                       <div className="IcnSettingsIcnXs w-4 h-4 justify-center items-center flex" />
//                     </div>
//                     <div className="A self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
//                       <div className="IcnSettingsIcnXs w-4 h-4 py-0.5 justify-center items-center flex" />
//                     </div>
//                     <div className="A self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
//                       <div className="IcnSettingsIcnXs w-4 h-4 justify-center items-center flex" />
//                     </div>
//                     <div className="A self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
//                       <div className="IcnSettingsIcnXs w-4 h-4 pt-px pb-0.5 justify-center items-center flex" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="NavbarLight self-stretch h-14 pl-9 pr-4 justify-end items-start gap-10 inline-flex">
//           <div className="NavbarBrand w-48 self-stretch pr-20 py-3 justify-start items-center inline-flex">
//             <div className="Bandage text-slate-800 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">Bandage</div>
//           </div>
//           <div className="CollapseNavbarCollapse w-96 self-stretch py-0.5 justify-center items-center gap-96 inline-flex">
//             <div className="NavbarNav self-stretch justify-start items-start gap-3.5 inline-flex">
//               <div className="Li w-11 h-6 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Link text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Home</div>
//                 </div>
//               </div>
//               <div className="Dropdown flex-col justify-start items-start gap-2.5 inline-flex">
//                 <div className="DropdownToggle pl-1.5 justify-end items-center gap-2 inline-flex">
//                   <div className="Category text-slate-800 text-sm font-medium font-['Montserrat'] leading-7 tracking-tight">Shop</div>
//                 </div>
//               </div>
//               <div className="Li w-11 h-6 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Link text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">About</div>
//                 </div>
//               </div>
//               <div className="Li w-8 h-6 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Link text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Blog</div>
//                 </div>
//               </div>
//               <div className="Li w-14 h-6 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Link text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Contact</div>
//                 </div>
//               </div>
//               <div className="Li w-11 h-6 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Link text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Pages</div>
//                 </div>
//               </div>
//             </div>
//             <div className="NavbarNav self-stretch justify-start items-center inline-flex">
//               <div className="Li w-40 h-14 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Btn32 self-stretch p-3.5 rounded-3xl justify-start items-center gap-1 inline-flex">
//                     <div className="IcnSettingsIcnXs w-3 h-3 justify-center items-center flex" />
//                     <div className="LoginRegister text-center text-sky-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Login / Register</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Li w-12 h-12 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Btn32 p-3.5 rounded-3xl justify-start items-center gap-1 inline-flex">
//                     <div className="IcnSettingsIcnXs w-4 h-4 justify-center items-center flex" />
//                   </div>
//                 </div>
//               </div>
//               <div className="Li w-14 h-11 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Btn32 p-3.5 rounded-3xl justify-start items-center gap-1 inline-flex">
//                     <div className="IcnSettingsIcnXs w-4 h-4 pr-px pt-px justify-center items-center flex" />
//                     <div className=" text-center text-sky-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">1</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="Li w-14 h-11 justify-center items-center flex">
//                 <div className="A grow shrink basis-0 self-stretch justify-center items-center inline-flex">
//                   <div className="Btn32 p-3.5 rounded-3xl justify-start items-center gap-1 inline-flex">
//                     <div className="IcnSettingsIcnXs w-4 h-4 pb-px justify-center items-center flex" />
//                     <div className=" text-center text-sky-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">1</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Carousel1 w-96 h-96 left-[1px] top-[136px] absolute bg-white rounded border border-neutral-200">
//         <div className="CarouselInner w-96 h-96 left-0 top-0 absolute justify-center items-center inline-flex">
//           <div className="CarouselItem w-96 h-96 relative flex-col justify-start items-start flex">
//             <img className="ShopHero1ProductSlide1 w-96 h-96 relative" src="https://via.placeholder.com/1440x716" />
//             <div className="Container py-28 flex-col justify-start items-center gap-20 inline-flex">
//               <div className="Row py-12 justify-start items-center gap-7 inline-flex">
//                 <div className="ColMd8 w-96 flex-col justify-start items-start gap-9 inline-flex">
//                   <div className="H5 text-white text-base font-bold font-['Montserrat'] leading-normal tracking-tight">SUMMER 2020</div>
//                   <div className="H1Headline6 text-white text-6xl font-bold font-['Montserrat'] leading-10 tracking-tight">NEW COLLECTION</div>
//                   <div className="H4 text-neutral-50 text-xl font-normal font-['Montserrat'] leading-loose tracking-tight">We know how large objects will act, <br/>but things on a small scale.</div>
//                   <div className="Cta justify-start items-start gap-2.5 inline-flex">
//                     <div className="ButtonBtnPrimaryColorBtnLg px-10 py-3.5 bg-green-500 rounded flex-col justify-start items-center gap-2.5 inline-flex">
//                       <div className="H3 text-center text-white text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">SHOP NOW</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="ColMd4 w-96" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="CarouselControlNext w-6 h-11 left-[1381px] top-[283px] absolute" />
//       </div>
//     </div>
//     <div className="DesktopShopCards31 px-48 bg-neutral-50 justify-center items-center inline-flex">
//       <div className="Container self-stretch py-20 flex-col justify-start items-center gap-12 inline-flex">
//         <div className="Row h-16 flex-col justify-start items-center flex">
//           <div className="MainContent h-16 flex-col justify-start items-center gap-2.5 flex">
//             <div className="H2FeatureSection1 text-slate-800 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">EDITOR’S PICK</div>
//             <div className="Paragraph text-center text-neutral-500 text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Problems trying to resolve the conflict between </div>
//           </div>
//         </div>
//         <div className="Row justify-start items-start gap-7 inline-flex">
//           <div className="ColMd6 w-96 h-96 justify-center items-center flex">
//             <div className="CardItem w-96 h-96 relative bg-white flex-col justify-start items-start flex">
//               <div className="MediaBgCover w-96 h-96 relative">
//                 <img className="CardCover20 w-96 h-96 left-0 top-0 absolute" src="https://via.placeholder.com/510x500" />
//                 <img className="Filter w-96 h-96 left-[1px] top-0 absolute" src="https://via.placeholder.com/509x500" />
//               </div>
//               <div className="CardContent w-44 py-3 bg-white justify-center items-center inline-flex">
//                 <div className="H2 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">MEN</div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd3 w-60 h-96 flex-col justify-center items-center inline-flex">
//             <div className="CardItem w-60 h-96 relative bg-white flex-col justify-start items-start flex">
//               <div className="MediaBgCover w-60 h-96 relative">
//                 <img className="CardCover21 w-60 h-96 left-0 top-0 absolute" src="https://via.placeholder.com/240x500" />
//                 <img className="Filter w-60 h-96 left-[1px] top-0 absolute" src="https://via.placeholder.com/239x500" />
//               </div>
//               <div className="CardContent w-32 px-12 py-3 bg-white justify-center items-center gap-2.5 inline-flex">
//                 <div className="H2 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">WOMEN</div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd3 flex-col justify-start items-start gap-4 inline-flex">
//             <div className="CardItem w-60 h-60 relative bg-white">
//               <div className="MediaBgCover w-60 h-60 left-0 top-0 absolute">
//                 <img className="CardCover22 w-60 h-60 left-0 top-0 absolute" src="https://via.placeholder.com/240x242" />
//                 <img className="Filter w-60 h-60 left-[1px] top-0 absolute" src="https://via.placeholder.com/239x242" />
//               </div>
//               <div className="CardContent w-44 px-6 py-3 left-[14px] top-[171px] absolute bg-white justify-start items-start gap-2.5 inline-flex">
//                 <div className="H2 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">ACCESSORIES</div>
//               </div>
//             </div>
//             <div className="CardItem w-60 h-60 relative bg-white">
//               <div className="MediaBgCover w-60 h-60 left-0 top-0 absolute">
//                 <img className="CardCover23 w-60 h-60 left-0 top-0 absolute" src="https://via.placeholder.com/240x242" />
//                 <img className="Filter w-60 h-60 left-[1px] top-0 absolute" src="https://via.placeholder.com/239x242" />
//               </div>
//               <div className="CardContent w-28 px-10 py-3 left-[18px] top-[176px] absolute bg-white justify-start items-start gap-2.5 inline-flex">
//                 <div className="H2 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">KIDS</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="DesktopProductCards10 pl-48 pr-32 bg-white flex-col justify-center items-center flex">
//       <div className="Container self-stretch h-96 py-20 flex-col justify-start items-center gap-20 inline-flex">
//         <div className="Row h-24 flex-col justify-start items-center flex">
//           <div className="MainContent h-24 flex-col justify-start items-center gap-2.5 flex">
//             <div className="H2SectionTitle text-center text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose tracking-tight">Featured Products</div>
//             <div className="H3SectionTitle text-center text-slate-800 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">BESTSELLER PRODUCTS</div>
//             <div className="Paragraph text-center text-neutral-500 text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Problems trying to resolve the conflict between </div>
//           </div>
//         </div>
//         <div className="Row justify-start items-start gap-7 inline-flex">
//           <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//             <div className="ProductCard h-96 bg-white flex-col justify-start items-start flex">
//               <div className="FixedHeight h-96 flex-col justify-center items-center flex">
//                 <img className="ProductCover5 w-60 h-96 relative" src="https://via.placeholder.com/239x427" />
//               </div>
//               <div className="Frame3 self-stretch h-48 px-6 pt-6 pb-9 flex-col justify-start items-center gap-2.5 flex">
//                 <div className="H5ProductTitle w-32 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</div>
//                 <div className="LinkProductCategory text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</div>
//                 <div className="Prices px-0.5 py-1 justify-start items-start gap-1 inline-flex">
//                   <div className="H5Price w-12 text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</div>
//                   <div className="H5Price w-11 text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</div>
//                 </div>
//                 <div className="ProductColors justify-start items-center gap-1.5 inline-flex">
//                   <div className="Ellipse14 w-4 h-4 bg-sky-500 rounded-full" />
//                   <div className="Ellipse15 w-4 h-4 bg-teal-700 rounded-full" />
//                   <div className="Ellipse16 w-4 h-4 bg-orange-400 rounded-full" />
//                   <div className="Ellipse17 w-4 h-4 bg-slate-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//             <div className="ProductCard h-96 bg-white flex-col justify-start items-start flex">
//               <div className="FixedHeight h-96 flex-col justify-center items-center flex">
//                 <img className="ProductCover5 w-60 h-96 relative" src="https://via.placeholder.com/239x427" />
//               </div>
//               <div className="Frame3 self-stretch h-48 px-6 pt-6 pb-9 flex-col justify-start items-center gap-2.5 flex">
//                 <div className="H5ProductTitle w-32 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</div>
//                 <div className="LinkProductCategory text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</div>
//                 <div className="Prices px-0.5 py-1 justify-start items-start gap-1 inline-flex">
//                   <div className="H5Price w-12 text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</div>
//                   <div className="H5Price w-11 text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</div>
//                 </div>
//                 <div className="ProductColors justify-start items-center gap-1.5 inline-flex">
//                   <div className="Ellipse14 w-4 h-4 bg-sky-500 rounded-full" />
//                   <div className="Ellipse15 w-4 h-4 bg-teal-700 rounded-full" />
//                   <div className="Ellipse16 w-4 h-4 bg-orange-400 rounded-full" />
//                   <div className="Ellipse17 w-4 h-4 bg-slate-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//             <div className="ProductCard h-96 bg-white flex-col justify-start items-start flex">
//               <div className="FixedHeight h-96 flex-col justify-center items-center flex">
//                 <img className="ProductCover5 w-60 h-96 relative" src="https://via.placeholder.com/239x427" />
//               </div>
//               <div className="Frame3 self-stretch h-48 px-6 pt-6 pb-9 flex-col justify-start items-center gap-2.5 flex">
//                 <div className="H5ProductTitle w-32 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</div>
//                 <div className="LinkProductCategory text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</div>
//                 <div className="Prices px-0.5 py-1 justify-start items-start gap-1 inline-flex">
//                   <div className="H5Price w-12 text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</div>
//                   <div className="H5Price w-11 text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</div>
//                 </div>
//                 <div className="ProductColors justify-start items-center gap-1.5 inline-flex">
//                   <div className="Ellipse14 w-4 h-4 bg-sky-500 rounded-full" />
//                   <div className="Ellipse15 w-4 h-4 bg-teal-700 rounded-full" />
//                   <div className="Ellipse16 w-4 h-4 bg-orange-400 rounded-full" />
//                   <div className="Ellipse17 w-4 h-4 bg-slate-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//             <div className="ProductCard h-96 bg-white flex-col justify-start items-start flex">
//               <div className="FixedHeight h-96 flex-col justify-center items-center flex">
//                 <img className="ProductCover5 w-60 h-96 relative" src="https://via.placeholder.com/239x427" />
//               </div>
//               <div className="Frame3 self-stretch h-48 px-6 pt-6 pb-9 flex-col justify-start items-center gap-2.5 flex">
//                 <div className="H5ProductTitle w-32 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</div>
//                 <div className="LinkProductCategory text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</div>
//                 <div className="Prices px-0.5 py-1 justify-start items-start gap-1 inline-flex">
//                   <div className="H5Price w-12 text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</div>
//                   <div className="H5Price w-11 text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</div>
//                 </div>
//                 <div className="ProductColors justify-start items-center gap-1.5 inline-flex">
//                   <div className="Ellipse14 w-4 h-4 bg-sky-500 rounded-full" />
//                   <div className="Ellipse15 w-4 h-4 bg-teal-700 rounded-full" />
//                   <div className="Ellipse16 w-4 h-4 bg-orange-400 rounded-full" />
//                   <div className="Ellipse17 w-4 h-4 bg-slate-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="Row justify-start items-start gap-7 inline-flex">
//           <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//             <div className="ProductCard h-96 bg-white flex-col justify-start items-start flex">
//               <div className="FixedHeight h-96 flex-col justify-center items-center flex">
//                 <img className="ProductCover5 w-60 h-96 relative" src="https://via.placeholder.com/239x427" />
//               </div>
//               <div className="Frame3 self-stretch h-48 px-6 pt-6 pb-9 flex-col justify-start items-center gap-2.5 flex">
//                 <div className="H5ProductTitle w-32 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</div>
//                 <div className="LinkProductCategory text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</div>
//                 <div className="Prices px-0.5 py-1 justify-start items-start gap-1 inline-flex">
//                   <div className="H5Price w-12 text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</div>
//                   <div className="H5Price w-11 text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</div>
//                 </div>
//                 <div className="ProductColors justify-start items-center gap-1.5 inline-flex">
//                   <div className="Ellipse14 w-4 h-4 bg-sky-500 rounded-full" />
//                   <div className="Ellipse15 w-4 h-4 bg-teal-700 rounded-full" />
//                   <div className="Ellipse16 w-4 h-4 bg-orange-400 rounded-full" />
//                   <div className="Ellipse17 w-4 h-4 bg-slate-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//             <div className="ProductCard h-96 bg-white flex-col justify-start items-start flex">
//               <div className="FixedHeight h-96 flex-col justify-center items-center flex">
//                 <img className="ProductCover5 w-60 h-96 relative" src="https://via.placeholder.com/239x427" />
//               </div>
//               <div className="Frame3 self-stretch h-48 px-6 pt-6 pb-9 flex-col justify-start items-center gap-2.5 flex">
//                 <div className="H5ProductTitle w-32 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</div>
//                 <div className="LinkProductCategory text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</div>
//                 <div className="Prices px-0.5 py-1 justify-start items-start gap-1 inline-flex">
//                   <div className="H5Price w-12 text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</div>
//                   <div className="H5Price w-11 text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</div>
//                 </div>
//                 <div className="ProductColors justify-start items-center gap-1.5 inline-flex">
//                   <div className="Ellipse14 w-4 h-4 bg-sky-500 rounded-full" />
//                   <div className="Ellipse15 w-4 h-4 bg-teal-700 rounded-full" />
//                   <div className="Ellipse16 w-4 h-4 bg-orange-400 rounded-full" />
//                   <div className="Ellipse17 w-4 h-4 bg-slate-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//             <div className="ProductCard h-96 bg-white flex-col justify-start items-start flex">
//               <div className="FixedHeight h-96 flex-col justify-center items-center flex">
//                 <img className="ProductCover5 w-60 h-96 relative" src="https://via.placeholder.com/239x427" />
//               </div>
//               <div className="Frame3 self-stretch h-48 px-6 pt-6 pb-9 flex-col justify-start items-center gap-2.5 flex">
//                 <div className="H5ProductTitle w-32 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</div>
//                 <div className="LinkProductCategory text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</div>
//                 <div className="Prices px-0.5 py-1 justify-start items-start gap-1 inline-flex">
//                   <div className="H5Price w-12 text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</div>
//                   <div className="H5Price w-11 text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</div>
//                 </div>
//                 <div className="ProductColors justify-start items-center gap-1.5 inline-flex">
//                   <div className="Ellipse14 w-4 h-4 bg-sky-500 rounded-full" />
//                   <div className="Ellipse15 w-4 h-4 bg-teal-700 rounded-full" />
//                   <div className="Ellipse16 w-4 h-4 bg-orange-400 rounded-full" />
//                   <div className="Ellipse17 w-4 h-4 bg-slate-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//             <div className="ProductCard h-96 bg-white flex-col justify-start items-start flex">
//               <div className="FixedHeight h-96 flex-col justify-center items-center flex">
//                 <img className="ProductCover5 w-60 h-96 relative" src="https://via.placeholder.com/239x427" />
//               </div>
//               <div className="Frame3 self-stretch h-48 px-6 pt-6 pb-9 flex-col justify-start items-center gap-2.5 flex">
//                 <div className="H5ProductTitle w-32 text-center text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Graphic Design</div>
//                 <div className="LinkProductCategory text-center text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">English Department</div>
//                 <div className="Prices px-0.5 py-1 justify-start items-start gap-1 inline-flex">
//                   <div className="H5Price w-12 text-center text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$16.48</div>
//                   <div className="H5Price w-11 text-center text-teal-700 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">$6.48</div>
//                 </div>
//                 <div className="ProductColors justify-start items-center gap-1.5 inline-flex">
//                   <div className="Ellipse14 w-4 h-4 bg-sky-500 rounded-full" />
//                   <div className="Ellipse15 w-4 h-4 bg-teal-700 rounded-full" />
//                   <div className="Ellipse16 w-4 h-4 bg-orange-400 rounded-full" />
//                   <div className="Ellipse17 w-4 h-4 bg-slate-800 rounded-full" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="Carousel2 w-96 h-96 relative bg-white rounded border border-neutral-200">
//       <div className="CarouselInner w-96 h-96 left-0 top-0 absolute justify-center items-center inline-flex">
//         <div className="CarouselItem w-96 h-96 relative flex-col justify-start items-start flex">
//           <div className="ShopHero2ProductSlide2 w-96 h-96 relative bg-teal-700" />
//           <div className="Container w-96 h-96 py-28 flex-col justify-start items-start gap-20 inline-flex">
//             <div className="Row h-96 justify-start items-start gap-7 inline-flex">
//               <div className="ColMd6 w-96 pt-14 flex-col justify-start items-start gap-7 inline-flex">
//                 <div className="H5 text-white text-xl font-normal font-['Montserrat'] leading-loose tracking-tight">SUMMER 2020</div>
//                 <div className="H1Headline4 w-96 text-white text-6xl font-bold font-['Montserrat'] leading-10 tracking-tight">Vita Classic Product</div>
//                 <div className="H4 w-80 text-white text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">We know how large objects will act, We know how are objects will act, We know</div>
//                 <div className="Cta justify-start items-center gap-8 inline-flex">
//                   <div className="H5Price text-center text-white text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">$16.48</div>
//                   <div className="ButtonMd px-10 py-3.5 bg-green-500 rounded flex-col justify-start items-center gap-2.5 inline-flex">
//                     <div className="BtnText text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">ADD TO CART</div>
//                   </div>
//                 </div>
//               </div>
//               <div className="ColMd6 w-96 flex-col justify-start items-center inline-flex">
//                 <img className="ShopHero2PngPicture1 w-96 h-96" src="https://via.placeholder.com/443x685" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="CarouselControlNext w-6 h-11 left-[1381px] top-[401px] absolute" />
//     </div>
//     <div className="ContainerFluid w-96 pr-px bg-white justify-center items-center inline-flex">
//       <div className="Row grow shrink basis-0 self-stretch justify-end items-center gap-7 inline-flex">
//         <div className="ColMd6 w-96 h-96 justify-center items-center flex">
//           <div className="HeroCover1 grow shrink basis-0 self-stretch px-9 pt-28 pb-20 justify-center items-center inline-flex">
//             <div className="None grow shrink basis-0 self-stretch pr-11 justify-start items-center inline-flex">
//               <img className="AsianWomanManWithWinterClothes1 w-96 h-96" src="https://via.placeholder.com/725x774" />
//             </div>
//           </div>
//         </div>
//         <div className="ColMd6 w-96 flex-col justify-center items-start gap-7 inline-flex">
//           <div className="H5HeaderTag text-stone-300 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">SUMMER 2020</div>
//           <div className="H1Headline text-slate-800 text-4xl font-bold font-['Montserrat'] leading-10 tracking-tight">Part of the Neural <br/>Universe</div>
//           <div className="H4SubHeadline w-96 text-neutral-500 text-xl font-normal font-['Montserrat'] leading-loose tracking-tight">We know how large objects will act, <br/>but things on a small scale.</div>
//           <div className="Cta justify-start items-start gap-2.5 inline-flex">
//             <div className="ButtonMd px-10 py-3.5 bg-green-500 rounded flex-col justify-start items-center gap-2.5 inline-flex">
//               <div className="BtnText text-center text-white text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">BUY NOW</div>
//             </div>
//             <div className="ButtonMd px-10 py-3.5 rounded border border-green-500 flex-col justify-start items-center gap-2.5 inline-flex">
//               <div className="BtnText text-center text-green-500 text-sm font-bold font-['Montserrat'] leading-snug tracking-tight">READ MORE</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="DesktopBlog3 w-96 px-48 bg-white justify-center items-center inline-flex">
//       <div className="Container grow shrink basis-0 self-stretch py-28 flex-col justify-start items-center gap-20 inline-flex">
//         <div className="Row h-32 flex-col justify-start items-center flex">
//           <div className="MainContent h-32 flex-col justify-start items-center gap-2.5 flex">
//             <div className="H6SectionTag text-center text-sky-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Practice Advice</div>
//             <div className="H3SectionTitle text-center text-slate-800 text-4xl font-bold font-['Montserrat'] leading-10 tracking-tight">Featured Posts</div>
//             <div className="Paragraph text-center text-neutral-500 text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">Problems trying to resolve the conflict between <br/>the two major realms of Classical physics: Newtonian mechanics </div>
//           </div>
//         </div>
//         <div className="Row justify-center items-start gap-7 inline-flex">
//           <div className="ColMd4 w-80 flex-col justify-start items-center inline-flex">
//             <div className="ContentCard h-96 bg-white shadow flex-col justify-start items-start flex">
//               <div className="FixedHeight h-72 relative">
//                 <img className="UnsplashHhdhcfaifhu w-80 h-72 left-0 top-0 absolute" src="https://via.placeholder.com/348x300" />
//                 <div className="Tag px-2.5 left-[20px] top-[20px] absolute bg-red-500 rounded-sm shadow justify-start items-center inline-flex">
//                   <div className="New text-center text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">NEW</div>
//                 </div>
//               </div>
//               <div className="Frame3 self-stretch h-80 px-6 pt-6 pb-9 flex-col justify-start items-start gap-2.5 flex">
//                 <div className="Tags justify-start items-center gap-3.5 inline-flex">
//                   <div className="Small text-blue-300 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Google</div>
//                   <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Trending</div>
//                   <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">New</div>
//                 </div>
//                 <div className="H4PostTitle w-60 text-slate-800 text-xl font-normal font-['Montserrat'] leading-loose tracking-tight">Loudest à la Madison #1 <br/>(L'integral)</div>
//                 <div className="ParagraphPostDescription w-72 text-neutral-500 text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">We focus on ergonomics and meeting <br/>you where you work. It's only a <br/>keystroke away.</div>
//                 <div className="Frame1 self-stretch py-3.5 justify-between items-center inline-flex">
//                   <div className="Frame1 justify-start items-center gap-1 flex">
//                     <div className="IconAkarIconsCalendar w-4 h-4 justify-center items-center flex">
//                       <div className="IconCoolIcon1 grow shrink basis-0 self-stretch px-0.5 pt-0.5 pb-px justify-center items-center inline-flex" />
//                     </div>
//                     <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">22 April 2021</div>
//                   </div>
//                   <div className="Frame1 justify-start items-center gap-1 flex">
//                     <div className="IconAntDesignAreaChartOutlined w-4 h-3.5 justify-center items-center flex" />
//                     <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">10 comments</div>
//                   </div>
//                 </div>
//                 <div className="A justify-start items-center gap-2.5 inline-flex">
//                   <div className="H6 text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Learn More</div>
//                   <div className="IconArrowNext w-2 h-4 pr-px flex-col justify-center items-center inline-flex" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd4 w-80 flex-col justify-start items-center inline-flex">
//             <div className="ContentCard h-96 bg-white shadow flex-col justify-start items-start flex">
//               <div className="FixedHeight h-72 relative">
//                 <img className="UnsplashTveqstc2uz8 w-80 h-72 left-0 top-0 absolute" src="https://via.placeholder.com/348x300" />
//                 <div className="Tag px-2.5 left-[20px] top-[20px] absolute bg-red-500 rounded-sm shadow justify-start items-center inline-flex">
//                   <div className="New text-center text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">NEW</div>
//                 </div>
//               </div>
//               <div className="Frame3 self-stretch h-80 px-6 pt-6 pb-9 flex-col justify-start items-start gap-2.5 flex">
//                 <div className="Tags justify-start items-center gap-3.5 inline-flex">
//                   <div className="Small text-blue-300 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Google</div>
//                   <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Trending</div>
//                   <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">New</div>
//                 </div>
//                 <div className="H4PostTitle w-60 text-slate-800 text-xl font-normal font-['Montserrat'] leading-loose tracking-tight">Loudest à la Madison #1 <br/>(L'integral)</div>
//                 <div className="ParagraphPostDescription w-72 text-neutral-500 text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">We focus on ergonomics and meeting <br/>you where you work. It's only a <br/>keystroke away.</div>
//                 <div className="Frame1 self-stretch py-3.5 justify-between items-center inline-flex">
//                   <div className="Frame1 justify-start items-center gap-1 flex">
//                     <div className="IconAkarIconsCalendar w-4 h-4 justify-center items-center flex">
//                       <div className="IconCoolIcon1 grow shrink basis-0 self-stretch px-0.5 pt-0.5 pb-px justify-center items-center inline-flex" />
//                     </div>
//                     <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">22 April 2021</div>
//                   </div>
//                   <div className="Frame1 justify-start items-center gap-1 flex">
//                     <div className="IconAntDesignAreaChartOutlined w-4 h-3.5 justify-center items-center flex" />
//                     <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">10 comments</div>
//                   </div>
//                 </div>
//                 <div className="A justify-start items-center gap-2.5 inline-flex">
//                   <div className="H6 text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Learn More</div>
//                   <div className="IconArrowNext w-2 h-4 pr-px flex-col justify-center items-center inline-flex" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="ColMd4 w-80 flex-col justify-start items-center inline-flex">
//             <div className="ContentCard h-96 bg-white shadow flex-col justify-start items-start flex">
//               <div className="FixedHeight h-72 relative">
//                 <img className="UnsplashDeguOcub1y w-80 h-72 left-0 top-0 absolute" src="https://via.placeholder.com/348x300" />
//                 <div className="Tag px-2.5 left-[20px] top-[20px] absolute bg-red-500 rounded-sm shadow justify-start items-center inline-flex">
//                   <div className="New text-center text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">NEW</div>
//                 </div>
//               </div>
//               <div className="Frame3 self-stretch h-80 px-6 pt-6 pb-9 flex-col justify-start items-start gap-2.5 flex">
//                 <div className="Tags justify-start items-center gap-3.5 inline-flex">
//                   <div className="Small text-blue-300 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Google</div>
//                   <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">Trending</div>
//                   <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">New</div>
//                 </div>
//                 <div className="H4PostTitle w-60 text-slate-800 text-xl font-normal font-['Montserrat'] leading-loose tracking-tight">Loudest à la Madison #1 <br/>(L'integral)</div>
//                 <div className="ParagraphPostDescription w-72 text-neutral-500 text-sm font-normal font-['Montserrat'] leading-tight tracking-tight">We focus on ergonomics and meeting <br/>you where you work. It's only a <br/>keystroke away.</div>
//                 <div className="Frame1 self-stretch py-3.5 justify-between items-center inline-flex">
//                   <div className="Frame1 justify-start items-center gap-1 flex">
//                     <div className="IconAkarIconsCalendar w-4 h-4 justify-center items-center flex">
//                       <div className="IconCoolIcon1 grow shrink basis-0 self-stretch px-0.5 pt-0.5 pb-px justify-center items-center inline-flex" />
//                     </div>
//                     <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">22 April 2021</div>
//                   </div>
//                   <div className="Frame1 justify-start items-center gap-1 flex">
//                     <div className="IconAntDesignAreaChartOutlined w-4 h-3.5 justify-center items-center flex" />
//                     <div className="Small text-neutral-500 text-xs font-normal font-['Montserrat'] leading-none tracking-tight">10 comments</div>
//                   </div>
//                 </div>
//                 <div className="A justify-start items-center gap-2.5 inline-flex">
//                   <div className="H6 text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Learn More</div>
//                   <div className="IconArrowNext w-2 h-4 pr-px flex-col justify-center items-center inline-flex" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="DesktopFooter6 h-96 relative bg-white">
//       <div className="Div w-96 px-48 pb-1 left-0 top-0 absolute bg-neutral-50 justify-center items-center inline-flex">
//         <div className="Container grow shrink basis-0 self-stretch py-10 flex-col justify-start items-start inline-flex">
//           <div className="Row justify-start items-center gap-96 inline-flex">
//             <div className="ColMd3 w-60 flex-col justify-start items-start gap-2.5 inline-flex">
//               <div className="NavbarBrand pr-20 py-3 justify-start items-center inline-flex">
//                 <div className="Bandage text-slate-800 text-2xl font-bold font-['Montserrat'] leading-loose tracking-tight">Bandage</div>
//               </div>
//             </div>
//             <div className="ColMd3 w-60 flex-col justify-start items-center inline-flex">
//               <div className="SocialMedia justify-center items-center gap-5 inline-flex">
//                 <div className="Facebook w-6 h-6 justify-center items-center flex">
//                   <div className="AntDesignFacebookFilled grow shrink basis-0 self-stretch px-px pb-px justify-center items-center inline-flex" />
//                 </div>
//                 <div className="Instagram w-6 h-6 justify-center items-center flex">
//                   <div className="AntDesignInstagramOutlined grow shrink basis-0 self-stretch px-px py-px justify-center items-center inline-flex" />
//                 </div>
//                 <div className="Twitter w-6 h-5 justify-center items-center flex">
//                   <div className="AntDesignTwitterOutlined grow shrink basis-0 self-stretch px-px py-px justify-center items-center inline-flex" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Hr w-96 h-px left-[195px] top-[138px] absolute border border-neutral-200"></div>
//       <div className="Div w-96 px-48 pb-0.5 left-0 top-[142px] absolute bg-white justify-center items-center inline-flex">
//         <div className="Container grow shrink basis-0 self-stretch py-12 flex-col justify-start items-start inline-flex">
//           <div className="Row justify-start items-start gap-7 inline-flex">
//             <div className="ColMd2 w-36 flex-col justify-start items-start gap-5 inline-flex">
//               <div className="H5 text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Company Info</div>
//               <div className="Div flex-col justify-start items-start gap-2.5 flex">
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">About Us</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Carrier</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">We are hiring</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Blog</div>
//               </div>
//             </div>
//             <div className="ColMd2 w-36 flex-col justify-start items-start gap-5 inline-flex">
//               <div className="H5 text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Legal</div>
//               <div className="Div flex-col justify-start items-start gap-2.5 flex">
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">About Us</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Carrier</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">We are hiring</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Blog</div>
//               </div>
//             </div>
//             <div className="ColMd2 w-36 flex-col justify-start items-start gap-5 inline-flex">
//               <div className="H5 text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Features</div>
//               <div className="Div flex-col justify-start items-start gap-2.5 flex">
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Business Marketing</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">User Analytic</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Live Chat</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Unlimited Support</div>
//               </div>
//             </div>
//             <div className="ColMd2 w-36 flex-col justify-start items-start gap-5 inline-flex">
//               <div className="H5 text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Resources</div>
//               <div className="Div flex-col justify-start items-start gap-2.5 flex">
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">IOS & Android</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Watch a Demo</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Customers</div>
//                 <div className="Link text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">API</div>
//               </div>
//             </div>
//             <div className="ColMd4 w-80 flex-col justify-start items-start gap-5 inline-flex">
//               <div className="H5 text-slate-800 text-base font-bold font-['Montserrat'] leading-normal tracking-tight">Get In Touch</div>
//               <div className="CustomFormGroupSubscribe w-80 h-20 relative">
//                 <div className="InputGroup w-80 h-14 left-0 top-0 absolute">
//                   <div className="FormControlInputStyle1 w-80 pl-5 pr-56 py-3.5 left-0 top-0 absolute bg-stone-50 rounded border border-neutral-200 justify-start items-center inline-flex">
//                     <div className="YourEmail text-neutral-500 text-sm font-normal font-['Montserrat'] leading-7 tracking-tight">Your Email</div>
//                   </div>
//                   <div className="InputGroupAppend w-28 h-14 left-[204px] top-0 absolute justify-center items-center inline-flex">
//                     <div className="Btn grow shrink basis-0 self-stretch px-6 py-3.5 bg-sky-500 rounded-tr rounded-br border border-neutral-200 justify-center items-center inline-flex">
//                       <div className="InputGroupText text-center text-white text-sm font-normal font-['Montserrat'] leading-7 tracking-tight">Subscribe</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="FormText left-[2px] top-[59px] absolute text-neutral-500 text-xs font-normal font-['Montserrat'] leading-7 tracking-tight">Lore imp sum dolor Amit</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="Div w-96 px-48 left-0 top-[414px] absolute bg-neutral-50 justify-center items-center inline-flex">
//         <div className="Container grow shrink basis-0 py-6 flex-col justify-start items-start inline-flex">
//           <div className="Row justify-start items-center gap-52 inline-flex">
//             <div className="ColMd7 w-96 flex-col justify-start items-start inline-flex">
//               <div className="MadeWithLoveByFinlandAllRightReserved text-neutral-500 text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">Made With Love By Finland All Right Reserved </div>
//             </div> 
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
   
// )
// }

// export default DesktopView;
