import React from "react";
import styled from "@emotion/styled";

const PageList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 40px 0;
`;

const PageItem = styled.a`
  display: block;
  width: 25px;
  height: 25px;
  line-height: 25px;
  box-sizing:border-box;
  font-size: 14px;
  font-weight: 400;
  color: ${props => (props.isActive ? '#fff' : '#666')};
  background-color: ${props => (props.isActive ? '#666' : '#fff')};
  border-radius: 100%;
  cursor: pointer;
`;

const Pagination = ({ itemPerPage, totalItem, paginate }) => {

  const pageItem = document.getElementsByClassName("page-item")

  const pageClick = (number) => {
    for(let i = 0; i < pageItem.length; i++){
      pageItem[i].style.backgroundColor = "#fff"
      pageItem[i].style.color = "#666"
    }
    pageItem.item(number - 1).style.background = "#666";
    pageItem.item(number - 1).style.color = "#fff";
  }

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <PageList>
          {pageNumbers.map((number) => (
            <PageItem 
            key={number} 
            isActive={number === 1}
            className="page-item"
            onClick={() =>{
              paginate(number) 
              pageClick(number)
              }} 
            >
            {number}
            </PageItem>
          ))}
        </PageList>
      </nav>
    </div>
  );
};

export default Pagination;