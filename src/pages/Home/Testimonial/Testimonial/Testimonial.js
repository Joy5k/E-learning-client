import React from 'react';
import { FaStar } from 'react-icons/fa';
import logo from '../../../../assets/icons/quote.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Testimonial = () => {
    return (
        <div>
            <div>
                <p className='text-center text-orange-600 font-bold text-xl'>Testimonial</p>
                <h1 className='my-5 text-5xl font-bold text-center'>What Customer Says</h1>
                <p className='mb-12 w-6/12  mx-auto text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-2 gap-6 mb-28'>
            <div data-aos="fade-right" className='shadow-xl border p-16 rounded-lg '>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                         <img className='btn-circle' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAADACAMAAAA+71YtAAAAkFBMVEX29vYyMjL9/f35+fkvLy/+/v4eHh4jIyMgICAqKiolJSUbGxsnJycsLCzz8/NDQ0MXFxfm5uaxsbHt7e2hoaE7Ozu6urrR0dHb29tTU1PHx8fU1NTFxcWHh4fg4OBsbGycnJxISEiTk5NycnJcXFy2trZ9fX1XV1eqqqqEhIRkZGRvb295eXk+Pj6fn58PDw96ZTAeAAAMsElEQVR4nO1d6XqqOhSFJIRACIogOA84W23f/+0OICqTgmBL4Lj+9N6v1QOLvTd7jiB88MEHH3zwwQcffPDBBx+0FhACDxDWfR21AgI4G/X2Vm8y87io+2pqAgS6ve3LmMiyjOWOO5PqvqI6ACXDRVhBYgik4YP+/4kEMA5UvZFwgSo6oO7r+lsA3SWamALqbv4n3YCwJ8ppFnx0e/8NERCMhhhl0+ARYf8fqgGBc6TsEQueapD/wUZ4LMyJ8pgFnwjRaPtbA4DJET9nwYOyq/s6fxVQMvcd/EQjbpAPbbWVXgih219Ufmgd4+j22mgivBjC2Ky0fIWISMSgZSbCEwRz5A5xjm1MgnXa5GFDIIytI8NaEaMQh7pqi2Z4JDjTDlVf5yAAtdphK4FpLbFW0C5mEtEGd8oLo1jRl8MDoL7ZeBMh2WJFFjxox4YLBNC/upVZ8IAXjTYRwBEzMguliBg1VyIgXDyOqV8E6jc24gLGHL+JBQ/avJk8QGC/SycuwPsmaoZkrN6mEyEaGGh4PoP6WhRRAGzYMB6AYKEHqddKwFaTNAPAvUjerBIhaHPeGZ557LzbMNygfDXFmwKDI/0tFkQ/4GqEQEBh8WKS5UWwRsQZYLAjv8mCB9KAd6fUU0omWopDdXkXCAinv2kZQqAl5/IA9eNv60QAdcY1EdDovDWYeAg84pkHMBOrmgbEFJVgjIkP74esKShDz2SeyzpgUI0GpMhY3G2/exNnHMAZ2Xv3NBRxKsUtcxx1wlm/Ag1Iw+JqP9Alye8YvMFvIDTH1lGLZzc55gGanfI0MIIOI0Eyx3bPdszUVwNgWJ1otEJsfu3DurSJZHRnC6Z9GJ56AzO7fRQCYY/u/wAZ88oD2JaNsRk9OmZv/SPuzac9tMCc0/AjSNT/7s5eAujRpzf7EAjvHGcl064F81QeAivM/iu81jqhkWx8LAhF3EyGVJGHRpE7k5y+6n+qy2vACY6lAkykbu2d54fjbcGmcqhvqcbolldxmHTL0MD6ixPxXjK4eNgEgXPYuZxKgwCWZbSC7dy+L0Zk+srj9V2KX7uRaoB2GSPJjvOgC0D74vW+XoW0LuFBofUy+BQ6t6XhBw5KiAMa9i+6RBtcuo0DuOrrPHTCn9qpKcnnXIDO61ayf/2PBhUjcgDHFVJQ2rY94mBVqN5RbgOmlwGO5eNtNGyLkRQEUyyfoFa/W8MDdCq0u9AGFGQKoop5QJ26r/59AF/lzYPCa+BYAnq/vHkgm9bwUMqpvgK3yDzsK5iHM69pxtcBVuVbHdi8NWoh6OcK3sOiNTzAQQXvAU/aYx42FYIsuTWxpgDc8oV+tKz76t8HMK/gRfFajSkBOCxvJuVGNcbmoEQu6grMa1WqDMrzgFCqwN9cwGFp+8B2hdTi3hPy2/dSBRXcSS2nmndphtGNgTOybXvizHQpc58UFxxVCC/IYy8qoMBw9tPjUlQI8bvGMJHFtesIsd1a/p+ZA2fiGFLNTFQIN1nmVOqFgpF1OstY1li0WQ4xFaPTxgg7qIAEBvtTR/UoouRYd0NlaQPB1vGMfUAA1Me2OxcpVpVs+4sU0l1ON85s5uxXjMrXP1O0mkP40mm5e5DlMwB1Y7Sfzs+UEk8Inn8SaQRTiuUYVcq6Xh6gUdKx9ryHQAQE07EXqyGigRqU+y4fdVdCSr4xkAgCETh2VErUzKbZ11C3dwon5SLO8zy0hFUJCFF/tFIyE/M2BsKvW9fMA5j+TY99DGkOUd1znXD0tvltxDSVyAXsjZYOc+vPZujVjZwHphGC1lOr1zvlGhxlLqX82Pp5kCrkYi63wGSMhq49EPyIAkibPAEjM2Ake3Bq1wsBfJfoC7pdviKT/txyTOneXC19PVcNZSUJYJcgv3Y7Wd5A+IMnZ3/oIrGYGI6eBy3+HCvoJbSn/vemYGa41kxRnr4YPV2g51MvxcEFT7M7l8RFsq6aF8b/AUDSg0CYHU/b+RKTR5ZDZvO0HNy/8OmrGAf7ScE+LhAcjGyBU1yf5aWtBxvJjc2xm6nq6l54tqT7qaah/uWDcBkjmYNsZyLmpFN/lMK/Ki+OGqy6GTKR1wfzrJmAhLNZ0Ik1tyv1Zzvjdk2dSv5ecsMMHjiUnGHafNCciwaHh4pxn8WRDpH3VMFs5+/CjPDg+zPQOMldupsElwahm5RyhHIK/k+arsh9VC8qNVzUjKXI3AHpAThj/uNk3e1F+qXkOw71877xYZqLRdxG6Nz556KlJGrfmQHhLjSOJBwpkBLTWwV4mDxwIWh0ohksrmJTvxflI3LVnp7C8e3/aCitkhuXiDy98NvPMi1EYmYFfoUmgnLSQnDzmZQtiLp6JDSIID6iQXM3KEIzazpYWyf+Sh8GdGmcdNbc7bvn1t1fo4yoIQ9wFhOIAvP6cJbepyHvkjMr0Bx6X6zxspkSjq/vcp+HUB4QXe9v1yfFhjSKWHcwO8dfuKh7ElK3C4Up/jly01ByazbXpp59CKwX6o+lyN2a0XADdQrIsXeL9LbHFTF8tjNnFIBu1l3NuuP2CvN74PQgbUbiA0fxqZ1idk2aTfuEqKpKMJvbuQO/PADMlfBJh/FGsncaxjInBTe8+HueN9biu+dw9MyfAg5CQ0gGMPCzk3W7RKGDuAUHcYKqd4MOTgLTy/P2dxoBzxtMOfxwEvOVaba2Nx7QuKRrUV8P5pz9n3HEg0gkt5QIYF00g1hAkI6KiJMFR7CNuYiItPXgm8vzRn6EYRCU8hESihEkKpqj98Vx9Z/8gW1gd1nqlZCa5JKXgzaKBAzTq7TnEeHS1HrEdGmcUVdvglfwGsC1AOOvsQHTn+Q+g6xmbLnfE1rHxFUggo38wBWTv04Vofy/xctN25gAm9C71vwuHTBL/T6zCxnhjmU2yFMqAHhN0MmnMGUdw6PNAEhGh3GTnMY8gNtmEJzlN0PnUSkbaXhozbIbRZNfEjutlYMe0iyAW36V7jOI0J/U+pBMdtbzM1j9pkn/tNbvhTUx/MIw0Cf2gEc5ipQyaMZwpvR86JXJ3c50YmaezRv0l9ruWqXUi8Rl3N3tZwNXpfhnzU0WJgJwr9njSYqI/DZkT0HwcLoZ6EFb6X3poD7obTt+c2WENEoDR10R6y9lpQBnN1OI5NTqFzgr0obMNEKV4crt2aPxwN9CaR3WiJIHLbac7lYB7u2RIzV1wlGqNP5YMBRN9vtmKcZEzWkvxJykaWPQ780LSE4S8TvNdVyuowSRUhSSJ4lu8mTM+RZwUdxMAZzuzxzhxOtT/429ztpLm9n+CjAWX9P4NVbZJvMQnO6RALF9c/grqrxV9gM0jQdB2kbjCBK9ykr7IprGQyIlGzt4Gpba0fgcfNoHwa93Rp96rGhTZSL8/o2IMUXTVFXVfNeCg57BBwBWlIhuJHUdbWJ5/f6Z71wRpT9cz09Td7FYuNN5H3G8hgqsIo89dp3lF+soFK0Plu3MTP1S5bq0Y+uM1N87+QhQj6w3Z9GVo0964XJo2Dr6JfiK/UPSt/ZkFLR2wMH97FXUiQ6f5nRPP4Q8S9V6IZCcNeGhh/QxwOh+cpQc/UVpxSCHYJ43kIdLOG7sh36bKql7ivUpIl1y3Wits3yspVE0dwP7YBrjyX67pHKgfDKHCYgIpP2ViG70Qqts5kNM9YPxrhePk9sgK2I8i4MQSARKy4MgvNmVKtRlVCukUXD6JlvGY63Fe2MMPppInwIYW0zkHzt2oZHc3VvAwShOLiAwetY4mZWav/XcOW7DixhguiTx5qwUn+moIih3MMAjcHxqUA5S03aV0OR1nhWWHKfQ4H19yWm7ajxwfcpcDiqstW0TD6UPWMriobl6UWkTWRJclrOKIjF+WQXNfW/6ANN3RRnN9aMCRDN3/Se3mQvt0Gge4DhymGSFPZaN3/8cfWd0KhDR+FM0wH3iGe3KL8JG54bzIIDDjQg2L+1ZoX7TefCIuKkG2paNOdCSw/6oFyEtfq7ZVtEtSYRyarw8eETY19OYkWgtS+WpML9lvRcAZrvwCGKE9scSvhVS2nF8BIQWu1R2kGq58su6QRvtVkcBjC25MEEOoyV5jQm14V5UFBAMtmogCerQsdgraX153ZZzKwNAYFhDKjPE5IXhKkW1A9FVq2gQfCbgYD8Xu/TnPDKt833U/wk0tTW2IQq/1GGMNt/TPYTOFNFYf31aFtTuodBx143EZY91wIk53kyHGlazmsyRhvtu7WvM/wgeF5LpWPO+TFQl3G2OEFNUoi1dB/I4iPN78JVlNlmchh1/iSHqd3Zba2K0aaqtOMKN34YHE4LMuaX/CZwO533wwQcffPDBBx988MEHIf4BiwvCA7ORxjwAAAAASUVORK5CYII=" alt="" />
                    <div>
                        <h2 className='text-xl font-bold'>Awlad Hossain</h2>
                        <p>Businessman</p>
                    </div>
                   </div>
                    <div>
                        <img className='w-16 h-16 bg-gray-100' src={logo} alt="" />
                    </div>
                </div>
                <p className='w-11/12'>There are many variations of passages
                    of Lorem Ipsum available, but the majorit
                    y have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even
                    slightly believable. </p>
                <span className='flex my-2'>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                
             </span>
                </div>
                
            <div data-aos="fade-left" className='shadow-xl border p-16 rounded-lg '>
                <div className='flex justify-between'>
                    <div className='flex gap-4'>
                         <img className='btn-circle' src="data:image/png;base64,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" alt="" />
                    <div>
                        <h2 className='text-xl font-bold'>Awlad Hossain</h2>
                        <p>Businessman</p>
                    </div>
                   </div>
                    <div>
                        <img className='w-16 h-16 bg-gray-100' src={logo} alt="" />
                    </div>
                </div>
                <p className='w-11/12'>There are many variations of passages
                    of Lorem Ipsum available, but the majorit
                    y have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even
                    slightly believable. </p>
                <span className='flex my-2'>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                <FaStar className='text-orange-500 text-xl'></FaStar>
                
             </span>
            </div>
           </div>
        </div>
    );
};
AOS.init();
export default Testimonial;