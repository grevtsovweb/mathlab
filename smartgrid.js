const smartgrid = require('smart-grid');

const settings = {
	outputStyle: 'sass',
    columns: 12,
    offset: '20px',
    container: {
        maxWidth: '1276px',
        fields: '30px'
    },
    breakPoints: {
    	md: {
            width: '992px',
            fields: '15px'
        },
        sm: {
            width: '760px',
            fields: '15px'
        },
        xs: {
            width: '576px',
            fields: '15px'
        },
        xxs: {
            width: '386px',
            fields: '15px'
        }
    },
    oldSizeStyle: false
};

smartgrid('./src/styles', settings);