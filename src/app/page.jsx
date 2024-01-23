/* eslint-disable @next/next/no-img-element */
import data from '../../public/assets/data.json';
import Carousel from './components/slider';
export default function Home() {
  return (
    <>
      <h1 className='font-bold text-5xl text-center mt-20 mb-10'>SCRUM-Daddies</h1>

      <div className='mb-36'>
        <img className='' src='../../../assets/images/groupPIC.png' alt='Gruppe billed' />
      </div>

      <section className='h-1/2'>
        <Carousel />
      </section>

      <article className='text-center [&>div>div>h2]:mx-auto mt-96 '>
        {data &&
          data?.scrum_daddy_team.map((info, index) => (
            <div
              className='card lg:card-side bg-base-100 lg:even:flex-row-reverse lg:rounded-none lg:even:rounded-l-full lg:odd:rounded-r-full [&>figure]:lg:even:rounded-none [&>figure]:lg:odd:rounded-none  my-44 shadow-2xl w-3/4 mx-auto border-4 [&>div>h2]:border-b-2 [&>div>h2]:w-fit [&:nth-child(2)]:border-green-200  [&:nth-child(1)]:border-pink-200  [&:nth-child(3)]:border-red-400 [&:nth-child(4)]:border-purple-200  [&:nth-child(5)]:border-blue-200 [&:nth-child(1)>div>h2]:border-pink-200 [&:nth-child(2)>div>h2]:border-green-200 [&:nth-child(3)>div>h2]:border-red-400 [&:nth-child(4)>div>h2]:border-purple-200 [&:nth-child(5)>div>h2]:border-blue-200'
              key={info.id}
              id={info.id}>
              <figure className=''>
                <img className='' src={info.info_image} alt='Album' />
              </figure>

              <div className='card-body my-auto'>
                <h2 className='card-title my-5'>{info.navn}</h2>
                <p className='font-roles uppercase font-semibold'>{info.role}</p>
                <p className='italic text-sm'>{info.mail}</p>
                <p className='text-xl font-quote italic mt-10'>"{info.quote}"</p>
              </div>
            </div>
          ))}
      </article>

      <aside className='py-10'>
        <p className='w-full border-b-black border-b-2 mb-3 uppercase'>our colors</p>
        <div className='flex gap-4 px-2'>
          <div className='w-full h-12 bg-purple-200'></div>
          <div className='w-full h-12 bg-red-400'></div>
          <div className='w-full h-12 bg-green-200'></div>
          <div className='w-full h-12 bg-pink-200'></div>
          <div className='w-full h-12 bg-cyan-200'></div>
        </div>
      </aside>
    </>
  );
}
