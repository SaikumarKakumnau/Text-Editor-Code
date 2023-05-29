import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #25262c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextEditorContainer = styled.div`
  background-color: #1b1c22;
  height: 80vh;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`
export const TextDetailsContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`

export const TextHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 40px;
`
export const TextImg = styled.img`
  width: 60%;
  margin-top: 40px;
`

export const TextContainer = styled.div`
  width: 50%;
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 10px;
`

export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 10px;
  padding-bottom: 0px;
`

export const ListItem = styled.li`
  margin-right: 10px;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: ${props => props.color};
`

export const HrLine = styled.hr`
  border: 1px solid #334155;
  padding: 0px;
`

export const TextArea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 60vh;
  color: #f8fafc;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 10px;
  font-size: 15px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
