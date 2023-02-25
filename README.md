# neurosity-web-app-demo
A demo version of the [neurosity-web-app](https://github.com/WilliamLa59/neurosity-web-app) I worked on for The School of Occupational and Public Health @ Toronto Metropolitan University.

I've omitted the server and this is essentially just a refactored version of the client side code without the requirement of an official [Nuerosity Crown](https://neurosity.co/). This demo version feeds static dummy data to the application in place of the Crown while still being able to perform its main functionalities.

## Getting Started

### How to Start:
1) Install the dependancies if you haven't already

        npm install

2) Run the application

        npm start
        
The app will run off port: [3000](http://localhost:3000/) 
<br>
<br>
### How to Use:
1) Click the "Simulate Values" button to start a reading session
2) Click it again to end the reading session
3) Fill out the first and last name fields and click the "Log" button
4) Click either of the download buttons to view the dummy data in csv format

*The entire 'session' JSON object can also be viewed in the console*

## Formats 
*More info can be found [Here](https://docs.neurosity.co/docs/api/brainwaves)*
### Raw 
The raw data are filtered values in sets of 16 values per reading in the following channels: 'CP3', 'C3', 'F5', 'PO3', 'PO4', 'F6', 'C4', 'CP4'.
A new reading a taken every 62.5ms by the Crown and this demo version is configured to match the device with static data.

      The static raw data used = {
          label: 'raw',
          data: [
            [
                1,   4.851055413759571,
               2.7564288713972513, -0.5027899221971044,
               -2.738312652550817, -1.4222768509324195,
               3.7224881424127774,  10.026623768677425,
               13.387940036943913,   10.26958811063134,
              0.40214439930276313,  -10.90689891807639,
               -16.32031531728357,  -13.21110292437311,
               -4.346339152926361,   5.098462672115731
            ],
            [
               1,   1.352550875105505,
               0.6428681224481866,  0.3647622839064659,
                1.106405158893898,    3.33535030106603,
                6.439447624257519,   8.453867322080404,
                7.755719477492251,  3.8854840128526726,
               -2.468418708869076,  -8.666576946507902,
              -11.279063910921169,   -9.32163910159064,
              -4.6549399985975555, 0.22830321396497988
            ],
            [
               1,   5.845156697083605,
               3.8819440822537112,   1.452431055127227,
              -0.5878084105038387, -0.7746780077287738,
               1.8154316196085094,   6.074662974618359,
                9.322430831260775,   8.910160063433407,
               3.5874046672323043,  -4.554187036159066,
                -10.5813322711113, -11.267696723897789,
               -6.818338145262863,  0.6177864457464617
            ],
            [
              1, -0.3068494494059635,
               -2.2075671327003255,  -3.776991642244289,
                -3.708252867923816, -1.2505125622236009,
                3.2487010722502587,   7.931368090269462,
                10.511652358411597,   9.297157466389192,
                 4.118487064147775,  -2.970255165231891,
                -8.603434324519576, -10.495401970387743,
                -8.913968355428027,  -5.576315727924461
            ],
            [
              1, 1.9781686568610883,
              2.4009012312957907, 2.3444623435812657,
               2.017191526524595,  2.021880260660721,
               2.982232584662937,  4.815498699074363,
              6.7093290202119835,  7.201157697368587,
               5.116090777276677, 0.6675802498302112,
              -4.274751517565271, -7.425134286013973,
              -7.838523284654038, -5.779233789541195
            ],
            [
               1,   6.831919893235682,
                6.468141714172544,   5.147606136919876,
                4.117592132996127,   4.788874365858218,
                7.116782027901927,    9.33554991116211,
                9.233167024756574,   5.130966403760715,
              -2.8162586562506586,  -11.22160733448037,
              -15.538132012307846, -13.939535958562475,
                -7.83032193319038, -0.5139467086717411
            ],
            [
              1,  1.6368537502872518,
                2.022946637839514,   0.940183871324582,
              -0.2837858448921892,  0.3170369574339986,
                3.778225479624427,   8.805770181583913,
               12.446309024446833,  11.648691354684154,
                5.113617281379798,  -4.345975093596486,
               -11.05811376487729, -11.719256256733335,
               -7.336025188705039,  -1.276174494743728
            ],
            [
                1,    8.201842402616839,
                5.517128178717949,   1.2864058791627557,
              -1.5101995538838966, -0.19819079250913285,
                5.195437241439434,   11.512563735679437,
               14.388370410845482,   10.711863367882668,
               0.8428177428317678,  -10.126402143316568,
               -15.75585412249734,  -13.887360795976967,
               -6.836657125920971,   1.1706118773123455
            ]
          ],
          info: {
            channelNames: [
              'CP3', 'C3',
              'F5',  'PO3',
              'PO4', 'F6',
              'C4',  'CP4'
            ],
            notchFrequency: '60Hz',
            samplingRate: 256,
            startTime: 1628194299499
          } 
          

 ### PowerByBand
 The PowerByBand data are the average power values per channel in sets of 8 in the following frequencies: <br>
 'Alpha', 'Beta', 'Delta', 'Gamma', 'Theta'<br>
 The Crown pushes out a new set of every 250ms.
 
         The static PowerByBand Data used = {
            label: 'powerByBand',
            data: {
              alpha: [
                0.4326838933650053,
                0.7011913998347046,
                1.3717684682104212,
                0.4043711439234614,
                0.4276277910286375,
                0.7343967679911133,
                0.4643529443786634,
                0.5012185195340365
              ],
              beta: [
                1.0473270376446968,
                0.6565360935142369,
                0.9905849734272257,
                0.4167252084581245,
                0.5812834985846604,
                0.9092642713573444,
                0.9963075404421067,
                1.0495665446734443
              ],
              delta: [
                0.46131690566460004,
                1.0030278320362798,
                0.8563781797682917,
                0.2911634678359473,
                0.5829804845703581,
                0.6714666592936025,
                0.37730719195446316,
                1.0851178080710937
              ],
              gamma: [
                0.22648773160183822,
                0.2171827127990081,
                0.2626969784220435,
                0.16349594919353772,
                0.17327387900192714,
                0.18990085940799623,
                0.22908540295491436,
                0.2537584109981627
              ],
              theta: [
                0.6434504807739541,
                0.936240328507981,
                0.8679595766147628,
                0.23662065697316603,
                0.6048174207817718,
                0.816112075629094,
                0.3367745804938397,
                1.1043745310136739
              ]
            }
            
## Discrepancies
Because the raw values update at a faster rate than PowerByBand, there will be duplicate values during the difference in time it takes to retreive new data from the crown. Since this addition wasn't the main focus of the project it remains somewhat unfinished. 
<br>
Since theres only one set of dummy data this demo version won't be able to display the difference in time it takes for the Crown to update each data format.
