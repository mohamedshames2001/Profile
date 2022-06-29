import React ,{useState , useEffect} from 'react'
import {ProtfalioSection , Title , Span , AllUl , AllLi , ImaheWrapper , Image , Overaly , OveralySpan} from './Style'
import axios from 'axios'
const Protfalio = () => {
   
      const  [ images , setImage ] = useState([]);

      useEffect(() => {
        axios.get('JSON/Data.json').then(res => {setImage(res.data.portfolio)});
      })

      const ProtfalioImages = images.map((imageItem) => {
        return(
          <ImaheWrapper key={imageItem.id}>
          <Image src={imageItem.image} alt='' />
          <Overaly>
            <OveralySpan>
              Show image
            </OveralySpan>
          </Overaly>
          </ImaheWrapper>
        )
      })

  return (
    <ProtfalioSection>
      <Title>My <Span>Protfalio</Span></Title>
        <AllUl>
         <AllLi>ALL</AllLi>
         <AllLi>HTML</AllLi>
         <AllLi>Mobile</AllLi>
        </AllUl>

        <div className="box">
          {ProtfalioImages}
        </div>
    </ProtfalioSection>
  )
}

export default Protfalio