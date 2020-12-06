import React, {Component} from 'react';
import '../../App.css'



class Header extends Component {
    state={flag:true}

    test=()=>{
        this.setState({flag:!this.state.flag})
    }

    render() {
        return (
            <div className={'Header-wrapper'}>
                <div className={'Header-block'}>
                    <img src={'https://az749841.vo.msecnd.net/modulesassets/Assets.img.skoda-logo-landscapeV2.a4df7efeb9c9eb4987594f574894ff1e.154x46-Fill.png'} alt={'skoda'} id={'img-Skoda'}/>
                    <div>
                        <ul className={'ul'}>
                            <li><a href='/#'>Моделі</a></li>
                            <li><a href='/#'>Про компанію</a></li>
                            <li><a href='/#'>Сервіс</a></li>
                            <li><a href="/#">Поcлуги</a></li>
                        </ul>
                    </div>
                </div>

                <div className={'Header-block'}>
                    <div className={'Header-right'}>

                        <ul className={'ul'}>
                            <li>
                                <img src={'data:image/png;base64,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'} className={'icon'} alt={'icon'}/>
                            </li>
                            <li><a href='/#'>Замовити онлайн</a></li>
                            <li>
                                <img src={'data:image/png;base64,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'} className={'icon'} alt={'icon'}/>
                            </li>
                            <li><a href='/#'>Авто на скаладі</a></li>
                            <li>
                                <img src={'https://icon-library.com/images/car-repair-icon-png/car-repair-icon-png-9.jpg'} className={'icon'} alt={'icon'}/>
                            </li>
                            <li><a href='/#'>Запис на сервіс</a></li>
                        </ul>

                        <ul className={'ul'}>
                            <li>
                                <img src={'https://cdn3.iconfinder.com/data/icons/mini-icon-set-general-office/91/General_-_Office_30-512.png'} className={'icon'} alt={'icon'}/>
                            </li>

                            <li onClick={this.test}>
                                <a href={'/#'} >Інструменти</a>

                            </li>

                            <li className={'MR20'}><a href='/#'><img src={'https://img.icons8.com/pastel-glyph/2x/search--v2.png'} className={'icon'} alt={'icon'}/></a></li>
                            <div className={`${this.state.flag}`}>
                                <ul className={'ul2'}>
                                    <li className={'li2'}><a href='/#'>Замовити онлайн</a></li>
                                    <li className={'li2'}><a href='/#'>Авто на складі</a></li>
                                    <li className={'li2'}><a href='/#'>Запис на сервіс</a></li>
                                    <li className={'li2'}><a href='/#'>Запис на тест-драйв</a></li>
                                    <li className={'li2'}><a href='/#'>Особистий кабінет</a></li>
                                    <li className={'li2'}><a href='/#'>Конфігуратор</a></li>
                                </ul>
                            </div>
                        </ul>


                    </div>

                </div>
            </div>

        );
    }
}

export default Header;