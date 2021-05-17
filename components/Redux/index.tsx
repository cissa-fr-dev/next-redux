import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

import { RootState } from '../../store';
import { change_title } from '../../store/modules/title';
import { ContentButton, Content, ContentForm, Form, H1, H4 } from './styles';

const Redux = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const title = useSelector((state: RootState) => state.title.title);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(inputRef.current.value);
    dispatch(change_title({ title: inputRef.current.value }));
  };

  return (
    <Content>
      <H1>Example with Redux</H1>
      <ContentForm>
        <Form>
          <H4>
            Título do form:{' '}
            <strong style={{ color: '#3f51b5' }}>
              {title && title.toLocaleUpperCase()}
            </strong>
          </H4>

          <TextField
            inputRef={inputRef}
            id="standard-basic"
            label="Digite o título"
            fullWidth
          />

          <ContentButton>
            <Button
              type="reset"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleClick}
            >
              Mudar título
            </Button>
          </ContentButton>
        </Form>
      </ContentForm>
    </Content>
  );
};

export default Redux;
