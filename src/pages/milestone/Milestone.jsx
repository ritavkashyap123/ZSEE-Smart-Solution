import React from "react";
import "./milestone.scss";
import TimelineContent from "./TimelineContent";
import { Link } from "react-router-dom";

const Timeline = () => {
  return (
    <div className="Milestone">
      <img src="/marwa 44.JPG" alt="" className="header-image" />
      <div className="header-text">Milestone</div>
      <section className="ag-timeline-block">
        <div className="ag-format-container">
          <div className="ag-timeline_box">
            <div className="ag-timeline-carousel-arrow_box">
              <i className="js-ag-timeline-carousel-arrow_prev ag-timeline-carousel-arrow">
                <svg className="svg-arrow-left">
                  <use xlinkHref="#ag-arrow-left"></use>
                </svg>
              </i>

              <i className="js-ag-timeline-carousel-arrow_next ag-timeline-carousel-arrow">
                <svg className="svg-arrow-right">
                  <use xlinkHref="#ag-arrow-right"></use>
                </svg>
              </i>
            </div>

            <ul
              id="ag-timeline-carousel"
              className="js-timeline-carousel ag-timeline-carousel_list"
            >
              <li>
                <div className="ag-timeline_year">2011</div>
                <div className="ag-timeline_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2012</div>
                <div className="ag-timeline_text">
                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                    sagittis magna. Sed consequat, leo eget bibendum sodales,
                    augue velit cursus nunc,
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2013</div>
                <div className="ag-timeline_text">
                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>

                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2014</div>
                <div className="ag-timeline_text">
                  <p>
                    Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                    sagittis magna. Sed consequat, leo eget bibendum sodales,
                    augue velit cursus nunc,
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2015</div>
                <div className="ag-timeline_text">
                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2016</div>
                <div className="ag-timeline_text">
                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>

                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2017</div>
                <div className="ag-timeline_text">
                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">1999</div>
                <div className="ag-timeline_text">
                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2000</div>
                <div className="ag-timeline_text">
                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                    sagittis magna. Sed consequat, leo eget bibendum sodales,
                    augue velit cursus nunc,
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2001</div>
                <div className="ag-timeline_text">
                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                    sagittis magna. Sed consequat, leo eget bibendum sodales,
                    augue velit cursus nunc,
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2002</div>
                <div className="ag-timeline_text">
                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2003</div>
                <div className="ag-timeline_text">
                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>

                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2004</div>
                <div className="ag-timeline_text">
                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2005</div>
                <div className="ag-timeline_text">
                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2006</div>
                <div className="ag-timeline_text">
                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2007</div>
                <div className="ag-timeline_text">
                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2008</div>
                <div className="ag-timeline_text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2009</div>
                <div className="ag-timeline_text">
                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>

                  <p>
                    Aenean leo ligula, porttitor eu, consequat vitae, eleifend
                    ac, enim. Aliquam lorem ante, dapibus in, viverra quis,
                    feugiat a, tellus. Phasellus viverra nulla ut metus varius
                    laoreet.
                  </p>

                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>
                </div>
              </li>

              <li>
                <div className="ag-timeline_year">2010</div>
                <div className="ag-timeline_text">
                  <p>
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum.
                  </p>

                  <p>
                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id,
                    lorem. Maecenas nec odio et ante tincidunt tempus. Donec
                    vitae sapien ut libero venenatis faucibus. Nullam quis ante.
                    Etiam sit amet orci eget eros faucibus tincidunt.
                  </p>

                  <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem. Nulla consequat massa quis enim. Donec pede
                    justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  </p>

                  <p>
                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                    justo. Nullam dictum felis eu pede mollis pretium. Integer
                    tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                    Aenean vulputate eleifend tellus.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="ag-timeline-carousel-nav_box">
          <ul className="js-timeline-carousel_nav ag-timeline-carousel-nav_list">
            <li className="ag-timeline-carousel-nav_item">2011</li>
            <li className="ag-timeline-carousel-nav_item">2012</li>
            <li className="ag-timeline-carousel-nav_item">2013</li>
            <li className="ag-timeline-carousel-nav_item">2014</li>
            <li className="ag-timeline-carousel-nav_item">2015</li>
            <li className="ag-timeline-carousel-nav_item">2016</li>
            <li className="ag-timeline-carousel-nav_item">2017</li>

            <li className="ag-timeline-carousel-nav_item">1999</li>
            <li className="ag-timeline-carousel-nav_item">2000</li>
            <li className="ag-timeline-carousel-nav_item">2001</li>
            <li className="ag-timeline-carousel-nav_item">2002</li>
            <li className="ag-timeline-carousel-nav_item">2003</li>
            <li className="ag-timeline-carousel-nav_item">2004</li>
            <li className="ag-timeline-carousel-nav_item">2005</li>
            <li className="ag-timeline-carousel-nav_item">2006</li>
            <li className="ag-timeline-carousel-nav_item">2007</li>
            <li className="ag-timeline-carousel-nav_item">2008</li>
            <li className="ag-timeline-carousel-nav_item">2009</li>
            <li className="ag-timeline-carousel-nav_item">2010</li>
          </ul>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
        <symbol id="ag-arrow-left" viewBox="0 0 7 12">
          <g>
            <path
              d="M6 0.999512L1 5.99951L6 10.9995"
              fill="transparent"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </symbol>

        <symbol id="ag-arrow-right" viewBox="0 0 7 12">
          <g>
            <path
              d="M1 10.9995L6 5.99951L1 0.999512"
              fill="transparent"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </symbol>
      </svg>
    </div>
  );
};

export default Timeline;
