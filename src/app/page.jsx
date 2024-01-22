import data from '../../public/assets/data.json';
import Carousel from './components/slider';
export default function Home() {
  return (
    <>
      <h1 className='font-bold text-5xl text-center my-20'>SCRUM-Daddies</h1>
      <section className='h-1/2'>
        <Carousel />
      </section>
      <article className='text-center [&>div>div>h2]:justify-center mt-96 '>
        {data &&
          data?.scrum_daddy_team.map((info, index) => (
            <div
              className='card lg:card-side bg-base-100 lg:even:flex-row-reverse lg:rounded-none my-44 shadow-2xl  w-3/4 mx-auto border-4 [&:nth-child(2)]:border-green-200  [&:nth-child(1)]:border-pink-200  [&:nth-child(3)]:border-red-200 [&:nth-child(4)]:border-purple-200  [&:nth-child(5)]:border-blue-200'
              key={info.id}
              id={info.id}>
              <figure className=''>
                <img className='' src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg' alt='Album' />
              </figure>
              <div className='card-body my-auto'>
                <h2 className='card-title'>{info.navn}</h2>
                <p className='font-roles uppercase font-semibold'>{info.role}</p>
                <p className='italic text-sm'>{info.mail}</p>
              </div>
            </div>
          ))}
      </article>
    </>
  );
}
