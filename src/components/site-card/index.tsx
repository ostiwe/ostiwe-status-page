import React, {useState} from "react";
import {Card, Tag, Typography} from "antd";
import i18next from "i18next";

const {Text} = Typography;

interface IncidentsInterface {
    date: number,
    amount: number,
}

interface PropsInterface {
    id: number,
    title: string,
    uptime: number,
    lastCheck: number,
    responseTime: number,
    incidents: IncidentsInterface[],
    status: 'online' | 'offline' | 'warning'
}

const colors = {
    online: 'green',
    offline: 'red',
    warning: 'orange',
}



const Index = (props: PropsInterface) => {
    const [hoverText, setHoverText] = useState('');
    const statusColor = colors[props.status];
    const status = props.status.toUpperCase();
    const data = [];

    for (let i = 0; i < 90; i++) {
        data.push(i);
    }

    const hoverAction = (event: any) => {
        if (event.type === 'mouseenter') {
            setHoverText('Какое-то значение');
            return;
        }
        if (event.type === 'mouseleave') {
            setHoverText('');
            return;
        }
    }

    return <Card
        className='site-card'
        title={props.title}
        key={props.id}
        extra={
            <div className='site-card__extra'>
                <Text type='secondary' className='site-card__extra-day'>{hoverText}</Text>
                <Tag color={statusColor}>{status}</Tag>
            </div>
        }
    >
        <div className="days-viewer">
            {data.map(value => {
                const error = value % 3 === 0;
                let className = 'service-day';
                if (error) {
                    className += ' day_ss';
                }
                return <div onMouseEnter={hoverAction} onMouseLeave={hoverAction} className={className}/>
            })}
        </div>
        <div className='mt-2'>
            <p className='divided'>
                <Text type='secondary'>{i18next.t('home_90_days_ago')}</Text>
                <span className='divider'/>
                <Text type='secondary'>Operational</Text>
                <span className='divider'/>
                <Text type='secondary'>{i18next.t('home_today')}</Text>
            </p>
        </div>

    </Card>
}

export default Index;