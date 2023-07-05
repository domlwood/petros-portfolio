import Image from "next/image"

export const Info = () => {
  return (
    <section>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, illum, error consequuntur fugit doloribus culpa beatae recusandae pariatur necessitatibus sequi autem quidem voluptate nemo modi! Asperiores illo culpa facere esse!</h3>
        <div className="grid grid-cols-4">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia qui doloremque cumque dignissimos ratione est odit reiciendis veritatis earum, illum esse, voluptatibus fugiat at explicabo autem ducimus placeat, quia aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, aut, minus exercitationem odit nulla omnis reprehenderit nam voluptate ducimus commodi qui dolorum. Harum tempore quaerat magnam quo est eligendi eos.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia qui doloremque cumque dignissimos ratione est odit reiciendis veritatis earum, illum esse, voluptatibus fugiat at explicabo autem ducimus placeat, quia aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, aut, minus exercitationem odit nulla omnis reprehenderit nam voluptate ducimus commodi qui dolorum. Harum tempore quaerat magnam quo est eligendi eos.</p>
            <div className="col-span-2">
                <Image alt="" width='200' height='200' src='/../../../public/images/placeholder-image.jpg'/>
            </div>
        </div>
    </section>
  )
}
