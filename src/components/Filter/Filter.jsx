import React, { useState } from "react";
import "../../helper.css";
import style from "./Filter.css";
import Pdata from "../Product/Pdata";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { filterActionCreator } from "../../ActionCreator/productActionCreator";
import { filterCatActionCreator } from "../../ActionCreator/productActionCreator";
import { filterGenderActionCreator } from "../../ActionCreator/productActionCreator";

const Filter = () => {
const [brands, setBrands] = useState([]);
const [categories, setCategories] = useState([]);
const [selectedColors, setSelectedColors] = useState([]);
const dispatch = useDispatch();

const handleColorChange = (color) => {
  if (selectedColors.includes(color)) {
    setSelectedColors(selectedColors.filter((c) => c !== color));
  } else {
    setSelectedColors([...selectedColors, color]);
  }
};
  return (
    <div className="filter-left-content">
      <div className="position-fixed left-content-border-new">
        <div className="filter-wrapper">
          <div className="container">
            <div className="label-space">
              <input type="checkbox" 
              onClick={() => {
				   let actionCreator = bindActionCreators(filterGenderActionCreator, dispatch);
           actionCreator("men")
				   
				  }
				  }  />
              <label>MEN</label>
              <br />
              <input type="checkbox" 
              onClick={() => {
				   let actionCreator = bindActionCreators(filterGenderActionCreator, dispatch);
           actionCreator("women")
				   
				  }
				  } 
          />
              <label>WOMEN</label>
              <br />
			  <input type="checkbox" 
        onClick={() => {
				   let actionCreator = bindActionCreators(filterGenderActionCreator, dispatch);
           actionCreator("boys")
				   
				  }
				  } 
          />
              <label>BOYS</label>
              <br />
              <input type="checkbox" 
              onClick={() => {
				   let actionCreator = bindActionCreators(filterGenderActionCreator, dispatch);
           actionCreator("girls")
				   
				  }
        }
          />
              <label>GIRLS</label>
              <br />
			  
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Categories</h3>
            <div className="label-space">
              <input
                type="checkbox"
                onClick={() => {
				   let actionCreator = bindActionCreators(filterCatActionCreator, dispatch);
           actionCreator("shirt")
				   
				  }
				  }
              />
              <label>Shirts</label>
              <br />
              <input
                type="checkbox"
                onClick={() => {
				   let actionCreator = bindActionCreators(filterCatActionCreator, dispatch);
           actionCreator("casualShirt")
				   
				  }
				  }
              />
              <label>Casual Shirts</label>
              <br />
              
            </div>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="container">
            <h3>Brands</h3>
            <div className="label-space">
              <input type="checkbox" 
              onClick={() => {
				   let actionCreator = bindActionCreators(filterActionCreator, dispatch);
           actionCreator("zara")
				   
				  }
				  }  />
              <label>Zara</label>
              <br />
              <input type="checkbox" 
              onClick={() => {
				   let actionCreator = bindActionCreators(filterActionCreator, dispatch);
           actionCreator("zalando")
				   
				  }
				  } 
          />
              <label>Zalando</label>
              <br />
			  <input type="checkbox" 
        onClick={() => {
				   let actionCreator = bindActionCreators(filterActionCreator, dispatch);
           actionCreator("roadster")
				   
				  }
				  } 
          />
              <label>Roadster</label>
              <br />
              <input type="checkbox" 
              onClick={() => {
				   let actionCreator = bindActionCreators(filterActionCreator, dispatch);
           actionCreator("arrow")
				   
				  }
        }
          />
              <label>Arrow</label>
              
              <br />
            </div>
          </div>
        </div>
        <div className="filter-wrapper">
          <div className="container">
            <h3>Colors</h3>
            <div className="label-space">
              <input
                type="checkbox"
                onChange={() => handleColorChange("blue")}
                checked={selectedColors.includes("blue")}
                onClick={() => {
                  let actionCreator = bindActionCreators(filterActionCreator, dispatch);
                  actionCreator("zalando")
                }}
                  
              />
              <label>Blue</label>
              <br />
              <input
                type="checkbox"
                onChange={() => handleColorChange("other")}
                checked={selectedColors.includes("other")}
                onClick={() => {
                  let actionCreator = bindActionCreators(filterActionCreator, dispatch);
                  actionCreator("roadster")
                }}
              />
              <label>Other</label>
              </div>
              </div>
              </div>
      </div>
    </div>
  );
};

export default Filter;
