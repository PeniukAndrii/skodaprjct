import React, {Component} from 'react';
import '../../App.css'

class Center extends Component {
    render() {
        return (
            <div>
                <div className={'image'}>
                    <img src={'https://az749841.vo.msecnd.net/siteassets/octavia_new_banner_5_edit.a122b6cbd003a18feea62e0ca05cdc48.1920x500-Fill.jpg'} alt={'skoda'}/>

                </div>
                <div className={'blackLine'}>
                    <div className={'blackLineText'}>
                        <div className={'blackLineTextInside'}>ЗНИЖКА НА OCTAVIA A8 ДО 1100$*</div>
                        <button className={'Btn'}>Дослідити</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Center;