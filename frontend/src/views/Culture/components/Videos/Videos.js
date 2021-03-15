import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { SectionHeader } from '../../../../components/molecules';

const useStyles = makeStyles(theme => ({
  root: {},
  year: {
    float: 'left',
    width: 100,
    height: 100,
    borderRadius: 50,
    border: '1px solid #ccc',
    backgroundColor: 'white',
    color: 'black',
    lineHeight: 3,
    fontSize: '34px',
    textAlign: 'center',
    marginRight: theme.spacing(3),
    cursor: 'pointer',
  },
  yearActive: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    border: 'none',
  }

}));

const Videos = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const theme = useTheme();

  const [lastIndex, setLastIndex] = useState(0);

  const [embed, setEmbed] = useState(data.pageData.annual_videos[lastIndex].embed_code);

  const gotoYear = (i) => {
    setEmbed(data.pageData.annual_videos[i].embed_code);
    setLastIndex(i);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <SectionHeader
        title={data.pageData.annual_video_title}
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
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography
            variant="body2"
            style={{marginBottom: theme.spacing(6)}}
          >
            <div dangerouslySetInnerHTML={{ __html: embed }} />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {data.pageData.annual_videos.map((video, i) =>
            <div onClick={() => gotoYear(i)} className={clsx(classes.year, i === lastIndex ? classes.yearActive : '')}>
              {video.year}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Videos;