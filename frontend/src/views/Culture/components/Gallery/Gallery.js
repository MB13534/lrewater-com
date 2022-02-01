import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import { SectionHeader } from '../../../../components/molecules';

const useStyles = makeStyles(() => ({
  root: {},
}));

const Gallery = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.gallery_title}
        align="left"
        titleProps={{
          variant: 'h1',
          style: {
            color: 'black',
            textTransform: 'uppercase',
            textShadow: '3px 3px 0px rgba(0,0,0,0.2)',
            marginBottom: theme.spacing(4),
          },
        }}
      />

      <div className={clsx('fotorama')} data-width="100%" data-ratio="800/600" data-nav="thumbs">
        {data.pageData.gallery_images.map((image, i) => {
          const imgUrl = image.directus_files_id.data.thumbnails.find(x => x.key === 'directus-large-crop').url;
          return <img key={i} src={imgUrl} alt="Team Photos" />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
