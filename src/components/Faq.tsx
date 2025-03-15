import api from '../../data.json'


const Faq = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col gap-4 px-14 pb-10">
        <h1 className="flex justify-start text-white text-2xl font-semibold text-left">
          Frequently asked questions
        </h1>
        <p className="flex justify-center text-sm text-left text-[#AAAAAA]">
          Hear from our marine enthusiasts about how Marine
        </p>
        
      </div>
      <div>
        <ul className='list-none gap-2 mx-10'>
            {api.faq.map((list,index)=>(
                <li key={index} className="before:content-['+'] font-normal before:mr-4 text-left flex text-lg">{list.question}</li>
            ))}

        </ul>
        <div className='text-sm mx-10 flex py-8 flex-col'>
            <p> Couldn’t find your answere?</p>
            <p className='text-blue-500 underline decorative underline-offset-2'> Talk to us</p>
        </div>
      </div>
      <div className='flex justify-center py-10' >
        <img alt='img' src='/footer.svg' className='flex justify-center h-[34rem]'/>
      </div>
    </div>
  );
};

export default Faq;
