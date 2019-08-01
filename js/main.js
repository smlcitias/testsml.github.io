function main() {
  (function () {
     'use strict';

      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 500);
              return false;
            }
          }
        });

    // affix the navbar after scroll below header
    $('#nav').affix({
          offset: {
            top: $('header').height()
          }
    });
  }());

  // Add navigator listener to jump to different sections.
  let navigators = document.getElementsByClassName('change-sect');
  let sectionArr = [
                    
                    document.getElementById('news'),
                    document.getElementById('lab'),
                    document.getElementById('research'),
                    document.getElementById('publication'),
                    document.getElementById('honors'),
                    document.getElementById('activities'),
                    document.getElementById('contact')];
  for (let i = 0; i < navigators.length; ++i) {
    navigators[i].addEventListener('click', function() {
      for (let j = 0; j < sectionArr.length; ++j) {
        if (navigators[i].innerHTML.toLowerCase() != sectionArr[j].id) {
          sectionArr[j].style.display = 'none';
          continue;
        }
        sectionArr[j].style.display = 'block';
      }
    })
  }

  // Add anchor listener of news.
  let newsPeople = document.getElementsByClassName('to-people');
  for (let i = 0; i < newsPeople.length; ++i) {
    newsPeople[i].addEventListener('click', function() {
      // Hide news section and show about section
      document.getElementById('news').style.display = 'none';
      document.getElementById('lab').style.display = 'block';
    })
  }
  let newsPublication = document.getElementsByClassName('to-publication');
  for (let i = 0; i < newsPublication.length; ++i) {
    newsPublication[i].addEventListener('click', function() {
      // Hide news section and show publication section
      document.getElementById('news').style.display = 'none';
      document.getElementById('publication').style.display = 'block';
    })
}
$mobile_browser = '0';

if(preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone)/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
    $mobile_browser++;
}

if((strpos(strtolower($_SERVER['HTTP_ACCEPT']),'application/vnd.wap.xhtml+xml')>0) or ((isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE'])))) {
    $mobile_browser++;
}    

$mobile_ua = strtolower(substr($_SERVER['HTTP_USER_AGENT'],0,4));
$mobile_agents = array(
    'w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac',
    'blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno',
    'ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-',
    'maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-',
    'newt','noki','oper','palm','pana','pant','phil','play','port','prox',
    'qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar',
    'sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-',
    'tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp',
    'wapr','webc','winw','winw','xda','xda-','Googlebot-Mobile');

if(in_array($mobile_ua,$mobile_agents)) {
    $mobile_browser++;
}

if (strpos(strtolower($_SERVER['ALL_HTTP']),'OperaMini')>0) {
    $mobile_browser++;
}

if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'windows')>0) {
    $mobile_browser=0;
}

if($mobile_browser>0) {
    header("Location: mobile.php"); //手機版
}else {
    header("Location: pc.php");  //電腦版
}
}
main();
