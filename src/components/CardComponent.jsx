import React from 'react'

const CardComponent = ({img, langs, title, disc, flex}) => {
  return (
    <>
        <div className={`${flex} border border-[#ABB2BF] [ transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300 ]`}>
            <div className="">
                <img src={img} alt="" />
            </div>
            <div className="lang border-y border-[#ABB2BF] flex gap-2 p-2 ">{ langs.map((e) =>{
                return <>
                    <span>{e}</span>
                </>
            }) }</div>
            <div className="p-4 pb-8">
                <h3 className='text-2xl font-medium text-white'>{title}</h3>
                <p className='mt-2 mb-8'>{disc}</p>
                <div className="links flex gap-8">
                    <a href="#" className="cursor-pointer btn font-medium text-[#FFFFFF] border border-[#C778DD] hover:bg-[#c778dd33] py-2 px-4">
                        Live
                    </a>

                    <a href="#" className="cursor-pointer btn font-medium text-[#FFFFFF] border border-[#C778DD] hover:bg-[#c778dd33] py-2 px-4">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardComponent