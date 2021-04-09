//rsfp
import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

albumList.propTypes = {

};

function albumList(props) {

    const albumList = [
        {
            id: 1,
            name: 'Nhạc thịnh hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/5/5/0/f/550f58fb70269797f2c14e9d560f647e.jpg'
        },
        {
            id: 2,
            name: 'Nhạc nước ngoài',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/e/6/5/6/e65670155f7abda2ed72140037659dc7.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Rap',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/1/2/6/01268a0b90ae40af76977f6c7c133810.jpg'
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default albumList;