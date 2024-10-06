import Popular1 from '../../assets/images/popular-1.jpg';
import Popular2 from '../../assets/images/popular-2.jpg';
import Popular3 from '../../assets/images/popular-3.jpg';
function PopularDestinations() {
  return (
    <section className="popular" id="destination">
      <div className="container">
        <p className="section-subtitle">Uncover place</p>
        <h2 className="h2 section-title">Popular destinations</h2>
        <p className="section-text">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
          Sit ornare mollitia tenetur, aptent.
        </p>

        <ul className="popular-list">
          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={Popular1} alt="San Miguel, Italy" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
                <p className="card-subtitle"><a href="#">Italy</a></p>
                <h3 className="h3 card-title"><a href="#">San Miguel</a></h3>
                <p className="card-text">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </li>

          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={Popular2} alt="Burj Khalifa, Dubai" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
                <p className="card-subtitle"><a href="#">Dubai</a></p>
                <h3 className="h3 card-title"><a href="#">Burj Khalifa</a></h3>
                <p className="card-text">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </li>

          <li>
            <div className="popular-card">
              <figure className="card-img">
                <img src={Popular3} alt="Kyoto Temple, Japan" loading="lazy" />
              </figure>
              <div className="card-content">
                <div className="card-rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
                <p className="card-subtitle"><a href="#">Japan</a></p>
                <h3 className="h3 card-title"><a href="#">Kyoto Temple</a></h3>
                <p className="card-text">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
              </div>
            </div>
          </li>
        </ul>
        
        <button className="btn btn-primary">More destinations</button>
      </div>
    </section>
  );
}

export default PopularDestinations;