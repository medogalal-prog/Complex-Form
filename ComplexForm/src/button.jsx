const variants={
    "default": "bg-black text-white",
    "danger": "bg-red-500 text-white",
    "success": "bg-green-500 text-white",
    "warning": "bg-yellow-500 text-white",
    "Reset": "bg-[#006cba] text-white ",
}

const Button = ({ variant, className, children, ...props }) => {
  return (
    <button {...props} className={`${variants[variant]} ${className} px-2 rounded-lg py-1 cursor-pointer`} >
      {children}
    </button>
  )
};
export default Button;



