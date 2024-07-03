import OctopaiHealthLogo from '../../assets/images/octopai-logo.png';

const AppHeader = () => {
    return (
        <div className='flex items-center gap-96'>
            <img src={OctopaiHealthLogo} alt="OctopaiHealthLogo" className='w-36 h-20' />
            <h1 className='font-semibold text-3xl text-sky-600'>AROM Assessment</h1>
        </div>
    )
}

export default AppHeader