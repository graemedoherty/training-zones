import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BasicModal from '../../BasicModal';
import zonesData from '../../ZonesData.json'; // Adjust the path as needed
import { ThemeContext } from '../../App';
import './HeartRateZone.css';

const HeartDataTable = ({ ranges }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('Heart Theme ', theme);
  }, [theme]);

  if (!ranges) {
    return <div>Loading...</div>;
  }

  // Common styles
  const textColor = theme === 'dark' ? '#48abe0' : 'black';
  const headerCellStyles = {
    color: theme === 'dark' ? 'white' : 'black',
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  };

  const getRowStyles = (zoneColor) => ({
    backgroundColor: theme === 'dark' ? 'black' : zoneColor,
    color: textColor,
    marginBottom: '10px', // Add space between rows
    '&:last-child td, &:last-child th': { border: 0 },
  });

  const cellTypographyStyles = {
    color: textColor,
    textAlign: 'center',
  };

  return (
    <TableContainer
      component={Paper}
      style={{
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <Table className='Heart-Data-Table' aria-label='simple table'>
        <TableHead>
          <TableRow id='Table-Header'>
            {['Zones', 'Feel', 'Range (BPM)', 'Intensity', 'Target Zones'].map(
              (header, index) => (
                <TableCell
                  key={index}
                  align={header === 'Zones' ? 'left' : 'right'}
                  className={
                    header === 'Feel' || header === 'Target Zones'
                      ? 'hide-on-mobile'
                      : ''
                  }
                  sx={headerCellStyles}
                >
                  <Typography variant='body2' sx={{ textAlign: 'center' }}>
                    {header}
                  </Typography>
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {zonesData.map((zone) => (
            <TableRow key={zone.id} sx={getRowStyles(zone.color)}>
              <TableCell
                component='th'
                scope='row'
                sx={{
                  color: 'black',
                  background: zone.color,
                  textAlign: 'center',
                }}
              >
                <Typography variant='body1' sx={{ color: 'black' }}>
                  {zone.zone}
                </Typography>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                <Typography variant='body2' sx={cellTypographyStyles}>
                  {zone.feel}
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography
                  variant='body1'
                  sx={{
                    ...cellTypographyStyles,
                    fontWeight: 'bold',
                    fontSize: '1.2rem', // Adjust fontSize as needed
                  }}
                >
                  {`${ranges[zone.id] ? ranges[zone.id][0] : ''} - ${
                    ranges[zone.id] ? ranges[zone.id][1] : ''
                  }`}
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='body2' sx={cellTypographyStyles}>
                  {zone.intensity}
                </Typography>
              </TableCell>
              <TableCell align='right' className='hide-on-mobile'>
                <BasicModal target={zone.target} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HeartDataTable;
