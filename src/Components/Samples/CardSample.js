import React from "react";
import Card from "../Card";

export default function CardSample() {
  const image1 =
    "https://iasbh.tmgrup.com.tr/e540f4/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2021/12/17/1639744509509.jpg&mw=752";
  const image2 = "https://www.evrensel.net/images/840/upload/dosya/72336.jpg";
  const image3 = "https://www.lincheap.com/upload/blog/1615545663.webp";
  const image4 =
    "https://www.orjinalsozler.com/wp-content/uploads/2016/03/nasrettin-hoca-evleniyor-7567.jpg";

  return (
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      <Card src={image1} title="Einstein">
        Ben atomu insanlığa hizmet etmek için parçaladım. Onlar bomba yapıp
        birbirlerini yok ettiler.
      </Card>
      <Card src={image2} title="Can Yücel">
        Bir insana zorla sevdiremezsin kendini, bana güven diyemezsin. O bunu
        hissetmiyorsa tek bir söz söyleyebilirsin; “Sen bilirsin”
      </Card>
      <Card src={image3} title="Ömer Hayyam">
        Eğer her şeyini kaybetmişsen ve cebinde bir ekmek alacak kadar paran
        kalmışsa, git kendine bir demet menekşe al ve ruhunu besle. Bence bu çok
        anlamlıdır ve kişinin öncelikle ruhunu beslemesi lazım.
      </Card>
      <Card src={image4} title="Nasreddin Hoca">
        İnanç, görünmeyene inanmaktır; görünmeyene inanırsanız başkalarının
        görmediklerini görebilirsiniz.
      </Card>
      <Card src={image1} title="Einstein">
        Ben atomu insanlığa hizmet etmek için parçaladım. Onlar bomba yapıp
        birbirlerini yok ettiler.
      </Card>
      <Card src={image2} title="Can Yücel">
        Bir insana zorla sevdiremezsin kendini, bana güven diyemezsin. O bunu
        hissetmiyorsa tek bir söz söyleyebilirsin; “Sen bilirsin”
      </Card>
      <Card src={image3} title="Ömer Hayyam">
        Eğer her şeyini kaybetmişsen ve cebinde bir ekmek alacak kadar paran
        kalmışsa, git kendine bir demet menekşe al ve ruhunu besle. Bence bu çok
        anlamlıdır ve kişinin öncelikle ruhunu beslemesi lazım.
      </Card>
    </div>
  );
}
