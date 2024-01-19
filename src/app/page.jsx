import data from '../../public/assets/data.json';

export default function Home() {
  console.log(data);
  return (
    <>
      <section className='h-1/2'>
        <article className='h-fit overflow-hidden'>
          <div className='carousel w-full'>
            <div id='item1' className='carousel-item w-full relative'>
              <img src='https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg' className='w-full' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#item4' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#item2' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='item2' className='carousel-item w-full relative'>
              <img src='https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg' className='w-full' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#item1' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#item3' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='item3' className='carousel-item w-full relative'>
              <img src='https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg' className='w-full' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#item2' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#item4' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div id='item4' className='carousel-item w-full relative'>
              <img src='https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg' className='w-full' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                <a href='#item3' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#item1' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className='flex justify-center w-full py-2 gap-2'>
            <a href='#item1' className='btn btn-xs'>
              1
            </a>
            <a href='#item2' className='btn btn-xs'>
              2
            </a>
            <a href='#item3' className='btn btn-xs'>
              3
            </a>
            <a href='#item4' className='btn btn-xs'>
              4
            </a>
          </div>
        </article>

        {data &&
          data?.scrum_daddy_team.map((info, index) => (
            <article className='text-center [&>div>div>h2]:justify-center'>
              <div className='card lg:card-side bg-base-100 shadow-xl my-10 '>
                <figure>
                  <img src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg' alt='Album' />
                </figure>
                <div className='card-body my-auto'>
                  <h2 className='card-title'>{info.navn}</h2>
                  <p>{info.role}</p>
                  <p>{info.mail}</p>
                </div>
              </div>
            </article>
          ))}

        {/* {data && (
          <article className='text-center [&>div>div>h2]:justify-center'>
            <div className='card lg:card-side bg-base-100 shadow-xl my-10 '>
              <figure>
                <img src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg' alt='Album' />
              </figure>
              <div className='card-body my-auto'>
                <h2 className='card-title'>{data.scrum_daddy_team[0].navn}</h2>
                <p>{data.scrum_daddy_team[0].role}</p>
                <p>{data.scrum_daddy_team[0].mail}</p>
              </div>
            </div>

            <div className='card lg:card-side bg-base-100 shadow-xl mb-10'>
              <div className='card-body order-2 lg:order-none my-auto'>
                <h2 className='card-title justify-center'>{data.scrum_daddy_team[1].navn}</h2>
                <p>{data.scrum_daddy_team[1].role}</p>
                <p>{data.scrum_daddy_team[1].mail}</p>
              </div>
              <figure>
                <img src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg' alt='Album' />
              </figure>
            </div>

            <div className='card lg:card-side bg-base-100 shadow-xl mb-10'>
              <figure>
                <img src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg' alt='Album' />
              </figure>
              <div className='card-body my-auto'>
                <h2 className='card-title'>{data.scrum_daddy_team[2].navn}</h2>
                <p>{data.scrum_daddy_team[2].role}</p>
                <p>{data.scrum_daddy_team[2].mail}</p>
              </div>
            </div>

            <div className='card lg:card-side bg-base-100 shadow-xl mb-10'>
              <div className='card-body order-1 lg:order-none my-auto'>
                <h2 className='card-title'>{data.scrum_daddy_team[3].navn}</h2>
                <p>{data.scrum_daddy_team[3].role}</p>
                <p>{data.scrum_daddy_team[3].mail}</p>
              </div>
              <figure>
                <img src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg' alt='Album' />
              </figure>
            </div>

            <div className='card lg:card-side bg-base-100 shadow-xl mb-10'>
              <figure>
                <img src='https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg' alt='Album' />
              </figure>
              <div className='card-body my-auto'>
                <h2 className='card-title'>{data.scrum_daddy_team[4].navn}</h2>
                <p>{data.scrum_daddy_team[4].role}</p>
                <p>{data.scrum_daddy_team[4].mail}</p>
              </div>
            </div>
          </article>
        )} */}
      </section>
    </>
  );
}
