import { GiSmartphone  } from 'react-icons/gi';
import { RiCameraLensLine, RiBattery2ChargeFill } from 'react-icons/ri';
import { TbDimensions  } from 'react-icons/tb';
import { CgSmartphoneRam } from 'react-icons/cg';
import { FaDatabase } from 'react-icons/fa';

const Specs = ({item}) => {

    return(
        
        <div className="bg-blue-300 bg-opacity-75 m-auto my-3 flex flex-row justify-between border rounded-xl p-2 sm:w-3/4 w-11/12"> 

            <div className="flex flex-col justify around sm:ml-3 ml-0">

                <div className="flex flex-row">
                    <GiSmartphone className="text-black text-4xl mb-5 mr-1 sm:mr-2"/>
                    <span className="text-black text-base mt-1"> {item.screenSize}" </span>
                </div>

                <div className="flex flex-row">
                    <RiCameraLensLine className="text-black text-4xl mb-5 mr-1 sm:mr-2"/>
                    <span className="text-black text-sm mt-2"> {item.camera} MP </span>
                </div>

                <div className="flex flex-row items-center">
                    <TbDimensions className="text-black text-4xl mb-5 mr-1 sm:mr-2"/>
                    <span className="text-black text-sm mb-3"> {item.dimension} mm </span>
                </div>


            </div>

            <div className="flex flex-col justify around sm:mr-3 mr-0">

                <div className="flex flex-row">
                    <CgSmartphoneRam className="text-black text-4xl mb-5 mr-2"/>
                    <span className="text-black mt-1"> {item.ram} </span>
                </div>

                <div className="flex flex-row">
                    <FaDatabase className="text-black text-4xl mb-5 mr-2"/>
                    <span className="text-black mt-1"> {item.internalMemory} </span>
                </div>

                <div className="flex flex-row items-center">
                    <RiBattery2ChargeFill className="text-black text-4xl mr-1"/>
                    <span className="text-black mt-1"> {item.battery} </span>
                </div>

            </div>

        </div>
    )
}

export default Specs