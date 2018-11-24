import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Invoice';

// export const Pdf = () => (
//   <PDFViewer>
//     <MyDocument />
//   </PDFViewer>
// );

export default class Pdf extends React.Component {
    render() {
        return(
            <PDFViewer>
                <MyDocument />
            </PDFViewer>
        );
    }
}

// ReactDOM.render(<Pdf />, document.getElementById('root'));