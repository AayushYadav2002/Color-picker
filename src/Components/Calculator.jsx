import React from 'react'
import { useState } from 'react';
import ColorPicker from './ColorPicker';

function Calculator() {
  
  const colors = [
    '#F3E5F5', // Light Violet
    '#E1BEE7',
    '#CE93D8',
    '#BA68C8',
    '#AB47BC', // Violet
    '#9C27B0',
    '#8E24AA',
    '#7B1FA2',
    '#6A1B9A',
    '#4A148C', // Dark Violet

    '#E8EAF6', // Light Indigo
    '#C5CAE9',
    '#9FA8DA',
    '#7986CB',
    '#5C6BC0', // Indigo
    '#3F51B5',
    '#3949AB',
    '#303F9F',
    '#283593',
    '#1A237E', // Dark Indigo

    '#E1F5FE', // Light Blue
    '#B3E5FC',
    '#81D4FA',
    '#4FC3F7',
    '#29B6F6', // Blue
    '#03A9F4',
    '#039BE5',
    '#0288D1',
    '#0277BD',
    '#01579B', // Dark Blue

    '#E0F2F1', // Light Green
    '#B2DFDB',
    '#80CBC4',
    '#4DB6AC',
    '#26A69A', // Green
    '#009688',
    '#00897B',
    '#00796B',
    '#00695C',
    '#004D40', // Dark Green

    '#F1F8E9', // Light Yellow
    '#DCEDC8',
    '#C5E1A5',
    '#AED581',
    '#9CCC65', // Yellow
    '#8BC34A',
    '#7CB342',
    '#689F38',
    '#558B2F',
    '#33691E', // Dark Yellow

    '#FFF3E0', // Light Orange
    '#FFE0B2',
    '#FFCC80',
    '#FFB74D',
    '#FFA726', // Orange
    '#FF9800',
    '#FB8C00',
    '#F57C00',
    '#EF6C00',
    '#E65100', // Dark Orange

    '#FFEBEE', // Light Red
    '#FFCDD2',
    '#EF9A9A',
    '#E57373',
    '#EF5350', // Red
    '#F44336',
    '#E53935',
    '#D32F2F',
    '#C62828',
    '#B71C1C', // Dark Red
  ];

    return (

    <div className='w-1/2 shadow-2xl animate-border rounded-xl inline-block  bg-white bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-[length:400%_400%] p-[3px]'>
        <div className='space-y-8 flex flex-col items-center  p-10 bg-white rounded-xl '>
          <h1 className='mx-auto w-fit text-4xl font-bold'>Color Picker</h1>
          <h4 className='font-semibold text-sm'>Click on the button to select a color</h4>
          <ColorPicker colors={colors}/>
        </div>

         <div className='rounded-b-xl p-5 py-5 flex justify-center items-center mt-1'>
                    <h3 className='text-2xl font-bold text-white' >Made By - Aayush Yadav</h3>
        </div>
        

        
        
        


    </div>
  )
}

export default Calculator
