semantic.search = {};

// ready event
semantic.search.ready = function() {

  // selector cache
  var
    $local    = $('.local .ui.search'),
    $external = $('.external.example .ui.search'),
    $mapping  = $('.mapping .ui.search'),
    $standard = $('.standard .ui.search'),
    $category = $('.category .ui.search'),

    content,
    // alias
    handler
  ;

  content = [
    { name: 'Ak47' , url: "http://github.com",  title: 'Andorra' },
    { name: 'Ak47' , url: "http://github.com",  title: 'United Arab Emirates' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Afghanistan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Antigua' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Anguilla' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Albania' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Armenia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Netherlands Antilles' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Angola' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Argentina' },
    { name: 'Ak47' , url: "http://github.com",  title: 'American Samoa' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Austria' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Australia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Aruba' },
    { name: 'Athitya' , title: 'Aland Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Azerbaijan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bosnia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Barbados' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bangladesh' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Belgium' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Burkina Faso' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bulgaria' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bahrain' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Burundi' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Benin' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bermuda' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Brunei' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bolivia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Brazil' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bahamas' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bhutan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Bouvet Island' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Botswana' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Belarus' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Belize' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Canada' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cocos Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Congo' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Central African Republic' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Congo Brazzaville' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Switzerland' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cote Divoire' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cook Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Chile' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cameroon' },
    { name: 'Ak47' , url: "http://github.com",  title: 'China' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Colombia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Costa Rica' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Serbia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cuba' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cape Verde' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Christmas Island' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cyprus' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Czech Republic' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Germany' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Djibouti' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Denmark' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Dominica' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Dominican Republic' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Algeria' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Ecuador' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Estonia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Egypt' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Western Sahara' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Eritrea' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Spain' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Ethiopia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'European Union' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Finland' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Fiji' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Falkland Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Micronesia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Faroe Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'France' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Gabon' },
    { name: 'Ak47' , url: "http://github.com",  title: 'England' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Grenada' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Georgia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'French Guiana' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Ghana' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Gibraltar' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Greenland' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Gambia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Guinea' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Guadeloupe' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Equatorial Guinea' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Greece' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Sandwich Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Guatemala' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Guam' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Guinea-Bissau' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Guyana' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Hong Kong' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Heard Island' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Honduras' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Croatia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Haiti' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Hungary' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Indonesia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Ireland' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Israel' },
    { name: 'Ak47' , url: "http://github.com",  title: 'India' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Indian Ocean Territory' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Iraq' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Iran' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Iceland' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Italy' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Jamaica' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Jordan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Japan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Kenya' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Kyrgyzstan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cambodia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Kiribati' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Comoros' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Saint Kitts and Nevis' },
    { name: 'Ak47' , url: "http://github.com",  title: 'North Korea' },
    { name: 'Ak47' , url: "http://github.com",  title: 'South Korea' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Kuwait' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Cayman Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Kazakhstan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Laos' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Lebanon' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Saint Lucia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Liechtenstein' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Sri Lanka' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Liberia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Lesotho' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Lithuania' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Luxembourg' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Latvia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Libya' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Morocco' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Monaco' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Moldova' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Montenegro' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Madagascar' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Marshall Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'MacEdonia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Mali' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Burma' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Mongolia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'MacAu' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Northern Mariana Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Martinique' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Mauritania' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Montserrat' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Malta' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Mauritius' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Maldives' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Malawi' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Mexico' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Malaysia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Mozambique' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Namibia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'New Caledonia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Niger' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Norfolk Island' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Nigeria' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Nicaragua' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Netherlands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Norway' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Nepal' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Nauru' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Niue' },
    { name: 'Ak47' , url: "http://github.com",  title: 'New Zealand' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Oman' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Panama' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Peru' },
    { name: 'Ak47' , url: "http://github.com",  title: 'French Polynesia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'New Guinea' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Philippines' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Pakistan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Poland' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Saint Pierre' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Pitcairn Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Puerto Rico' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Palestine' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Portugal' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Palau' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Paraguay' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Qatar' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Reunion' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Romania' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Serbia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Russia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Rwanda' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Saudi Arabia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Solomon Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Seychelles' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Sudan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Sweden' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Singapore' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Saint Helena' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Slovenia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Svalbard, I Flag Jan Mayen' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Slovakia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Sierra Leone' },
    { name: 'Ak47' , url: "http://github.com",  title: 'San Marino' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Senegal' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Somalia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Suriname' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Sao Tome' },
    { name: 'Ak47' , url: "http://github.com",  title: 'El Salvador' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Syria' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Swaziland' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Caicos Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Chad' },
    { name: 'Ak47' , url: "http://github.com",  title: 'French Territories' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Togo' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Thailand' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Tajikistan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Tokelau' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Timorleste' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Turkmenistan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Tunisia' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Tonga' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Turkey' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Trinidad' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Tuvalu' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Taiwan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Tanzania' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Ukraine' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Uganda' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Us Minor Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'United States' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Uruguay' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Uzbekistan' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Vatican City' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Saint Vincent' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Venezuela' },
    { name: 'Ak47' , url: "http://github.com",  title: 'British Virgin Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Us Virgin Islands' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Vietnam' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Vanuatu' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Wallis and Futuna' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Samoa' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Yemen' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Mayotte' },
    { name: 'Ak47' , url: "http://github.com",  title: 'South Africa' },
    { name: 'Ak47' , url: "http://github.com",  title: 'Zambia' },
    { name: 'Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 Ak47 ' , url: "http://github.com",  title: 'Zimbabwe' }
  ];

  $local
    .search({
      searchFields: ['name','title'],
      source: content,
      maxResults: 5,
      showNoResults: true,
      type: "custom"
    })
  ;

  $standard
    .search()
  ;

  $category
    .search({
      type: 'category',
      apiSettings: {
        action: 'categorySearch'
      }
    })
  ;

  // mapping example
  $mapping
    .search({
      apiSettings: {
        url: '//api.github.com/search/repositories?q={query}',
        cache: true
      },
      fields: {
        results : 'items',
        title   : 'name',
        url     : 'html_url'
      },
      minCharacters : 3
    })
  ;

  // api mod
  $external
    .search({
      type          : 'category',
      minCharacters : 3,
      apiSettings   : {
        onFailure: function() {
          $(this).search('display message', '<b>Hold off a few minutes</b> <div class="ui divider"></div> GitHub rate limit exceeded for anonymous search.');
        },
        onResponse: function(githubResponse) {
          var
            response = {
              results : {}
            }
          ;
          if(githubResponse.items.length === 0) {
            // no results
            return response;
          }
          $.each(githubResponse.items, function(index, item) {
            var
              language  = item.language || 'Unknown',
              maxLength = 200,
              description
            ;
            if(index >= 8) {
              // only show 8 results
              return false;
            }
            // Create new language category
            if(response.results[language] === undefined) {
              response.results[language] = {
                name    : language,
                results : []
              };
            }
            description = (item.description < maxLength)
                ? item.description
                : item.description.substr(0, maxLength) + '...'
            ;
            description = $.fn.search.settings.templates.escape(description);
            // Add result to category
            response.results[language].results.push({
              title       : item.name,
              description : description,
              url         : item.html_url
            });
          });
          return response;
        },
        url: '//api.github.com/search/repositories?q={query}'
      }
    })
  ;


};


// attach ready event
$(document)
  .ready(semantic.search.ready)
;