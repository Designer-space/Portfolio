import React from 'react'

const CardComponent = ({img, langs, title, disc, flex, live, git}) => {
  return (
        <div className={`${flex} border border-[#ABB2BF] [ transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-95 duration-300 ]`}>
            {img != undefined && 
                <div className="">
                    <img src={img} alt="project image" className='aspect-[4/2] object-cover' />
                </div>
            }
            <div className="lang border-b border-[#ABB2BF] flex gap-2 p-2 ">{ 
            langs.map((e, index) =>{
                return <span key={index}>{e}</span>
            }) }</div>
            <div className="p-4 pb-8">
                <h3 className='text-2xl font-medium text-white'>{title}</h3>
                <p className='mt-2 mb-8'>{disc}</p>
                <div className="links flex gap-8">
                    <a href={live} target='_blank' className="cursor-pointer btn font-medium text-[#FFFFFF] border border-[#C778DD] hover:bg-[#c778dd33] py-2 px-4">
                        Live
                    </a>

                    <a href={git} target='_blank' className="cursor-pointer btn font-medium text-[#FFFFFF] border border-[#C778DD] hover:bg-[#c778dd33] py-2 px-4">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
  )
}

export default CardComponent