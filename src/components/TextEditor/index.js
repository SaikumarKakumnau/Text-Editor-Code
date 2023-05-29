import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  BgContainer,
  TextEditorContainer,
  TextDetailsContainer,
  TextHeading,
  TextImg,
  TextContainer,
  ButtonContainer,
  ListItem,
  Button,
  HrLine,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickIsBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickIsItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickIsUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    const boldColor = isBold ? '#faff00' : '#f1f5f9'
    const italicColor = isItalic ? '#faff00' : '#f1f5f9'
    const underlineColor = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <BgContainer>
        <TextEditorContainer>
          <TextDetailsContainer>
            <TextHeading>Text Editor</TextHeading>
            <TextImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextDetailsContainer>
          <TextContainer>
            <ButtonContainer>
              <ListItem>
                <Button
                  data-testid="bold"
                  color={boldColor}
                  onClick={this.onClickIsBold}
                >
                  <VscBold />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="italic"
                  color={italicColor}
                  onClick={this.onClickIsItalic}
                >
                  <GoItalic />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  data-testid="underline"
                  color={underlineColor}
                  onClick={this.onClickIsUnderline}
                >
                  <AiOutlineUnderline />
                </Button>
              </ListItem>
            </ButtonContainer>
            <HrLine />
            <TextArea
              cols="60"
              row="800"
              bold={isBold}
              italic={isItalic}
              underline={isUnderline}
            />
          </TextContainer>
        </TextEditorContainer>
      </BgContainer>
    )
  }
}

export default TextEditor
