// pages/index.js or any other component where you want to use this code

import Image from 'next/image'

const DesktopView = () => {
  return (
    <div className="EcommerceDesktop1 h-96 bg-white flex-col justify-start items-start inline-flex">
    <div className="DesktopShopHeader1 w-96 h-96 relative bg-neutral-50">
      <div className="Background w-96 h-96 left-0 top-0 absolute">
        <img
          className="HeroCover2 w-96 h-96 left-0 top-0 absolute"
          src="/images/carousel1.jpg"
          alt="Carousel Image"
        />
        <div className="Filter w-96 h-96 left-0 top-0 absolute bg-black/50" />
      </div>
      <div className="NavbarStyle8NavbarLight h-32 pb-2 left-0 top-0 absolute bg-white flex-col justify-start items-start gap-3 inline-flex">
        <div className="NavbarDark self-stretch h-14 pt-2 pb-0.5 bg-slate-800 justify-center items-center inline-flex">
          <div className="CollapseNavbarCollapse w-96 self-stretch justify-center items-center inline-flex">
            <div className="Container grow shrink basis-0 self-stretch justify-between items-start inline-flex">
              <div className="Row h-11 px-6 justify-between items-start flex">
                <div className="ColMd4 justify-start items-center gap-2.5 flex">
                  <div className="BtnSm20 p-2.5 rounded justify-start items-center gap-1 flex">
                    <div className="H6 text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">
                      (225) 555-0118
                    </div>
                  </div>
                  <div className="BtnSm20 p-2.5 rounded justify-start items-center gap-1 flex">
                    <div className="H6 text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">
                      michelle.rivera@example.com
                    </div>
                  </div>
                </div>
                <div className="ColMd4 p-2.5 justify-start items-start gap-2.5 flex">
                  <div className="H6 text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">
                    Follow Us and get a chance to win 80% off
                  </div>
                </div>
                <div className="ColMd4 p-2.5 justify-start items-start gap-2.5 flex">
                  <div className="H6 text-white text-sm font-bold font-['Montserrat'] leading-normal tracking-tight">
                    Follow Us:
                  </div>
                  {/* Add your Social Media Icons */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default DesktopView;
