
import { Button, Input } from 'antd'
import profileIMG from './assets/images/avatar-demo-2.png'
import homeIMG from './assets/images/blog-thumb.png'
import './assets/scss/blogdetails.scss'

const BlogDetails = () => {
    return (
        <>
            <div className="blog-details-wrapper">
                <div className="blog-details-header-wrapper">
                    <div className="bd-header">
                        <div className="bd-label">DISCOVER</div>
                        <h1 className="bd-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</h1>
                        <div className="bd-tag">Home Insights & Resourses</div>
                    </div>
                    <div className="line-div"></div>
                </div>
                <div className="blog-content-wrapper">
                <div className="profile-card">
                        <img src={profileIMG} alt="" />
                        <div className="profile-data">
                            <h4>Alina Sarkov</h4>
                            <span>May 21, 2023</span>
                        </div>
                    </div>
                    <img src={homeIMG} alt="" />
                    <div className="blog-conent">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto quasi dolore voluptatem aliquid consequuntur quibusdam ratione explicabo similique tempora. Quasi, soluta praesentium aliquam ipsa nesciunt eum porro eius laborum ipsam obcaecati quas dolorem beatae odio dolores mollitia impedit saepe. Accusantium, fugit hic. A reprehenderit, vero ut iusto hic eius dicta voluptatem tempora pariatur, architecto laboriosam similique totam nulla. Nulla exercitationem nisi voluptas fugiat ipsam rem placeat doloribus rerum pariatur.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut sunt unde amet et ratione. Eum veniam, veritatis voluptates ea quisquam cupiditate doloremque sunt blanditiis omnis voluptate beatae, nulla quasi laudantium? Impedit a natus consectetur iure cum voluptas, vitae nam molestiae adipisci minus beatae earum fugiat quis corporis consequatur et debitis recusandae nobis animi odio nemo maxime maiores. Odit atque nemo optio quos. Quae voluptas quas asperiores omnis distinctio adipisci illo iusto explicabo voluptate. Unde nihil illo similique dolore minus, est dolores nemo quae molestias voluptatem voluptas nobis mollitia aspernatur illum quia natus officiis, incidunt quo vero harum deserunt. Nisi, veritatis? Numquam cupiditate ut, recusandae eum laboriosam atque non blanditiis laborum voluptate ab! Vel inventore alias pariatur deserunt voluptatibus saepe, nisi velit delectus culpa fugit officia ut nam doloremque natus atque expedita amet cumque iste perferendis quo excepturi cupiditate quis. Ipsa, quam magnam! Minima, laudantium eligendi possimus ullam cupiditate voluptatibus nisi! Nobis nam at possimus sapiente ullam saepe, magni modi temporibus illo, rerum eos eius tempore. Inventore asperiores consequuntur non optio labore ipsum deserunt quia quisquam! Nostrum ut similique quos vitae, doloremque suscipit dolores aliquam tempore architecto delectus accusamus quas nisi.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, beatae blanditiis. Pariatur, nisi ipsum! Incidunt voluptate neque tempora dolorum quaerat.</p>
                    </div>
                </div>
                <div className='lead-gen-from'>
                    <div className='description'>
                        <h3>Submit your mail Id for Our Newsletter</h3>
                        <span>Receive the latest news straight to your inbox.</span>
                    </div>
                    <div className='form'>
                        <Input
                            className="input-field"
                            placeholder="Enter your Email Address"
                        />
                        <Button type="primary" className='submit-btn'>Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails