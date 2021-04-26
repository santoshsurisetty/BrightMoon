export const SocialLink = props => {
    return (
        <div className='col-md-12'>
            <div className='row'>
                <div className='social top-bar'>
                    <ul>
                        <li>
                            <a href={props.data ? props.data.facebook : '/'}>
                                <i className='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a href={props.data ? props.data.twitter : '/'}>
                                <i className='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a href={props.data ? props.data.discord : '/'}>
                                <i className='fab fa-discord'></i>
                            </a>
                        </li>
                        <li>
                            <a href={props.data ? props.data.telegram : '/'}>
                                <i className='fab fa-telegram'></i>
                            </a>
                        </li>
                        <li>
                            <a href={props.data ? props.data.youtube : '/'}>
                                <i className='fab fa-youtube'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}