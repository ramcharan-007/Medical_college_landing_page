import React from "react";

import BgGrid from "../../utils/bgGrid";
import Button from "../../utils/Button";
import Card from "../../utils/Card";
import GridImage from "../../utils/GridImage";
import HeroSectionGrid from "../../utils/HeroSectionGrid";

const Home = () => {
  return (
    <div>
      <div>
        <BgGrid>
          <div>
            <div>example</div>
            <div>
              <HeroSectionGrid />
            </div>
          </div>
        </BgGrid>
      </div>
    </div>
  );
};

export default Home;
