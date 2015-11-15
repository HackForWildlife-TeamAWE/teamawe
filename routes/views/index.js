var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	//var location = 
	//keystone.list('Animal').model.findOne(function(err,result){
	//	console.log(result);
	//	var Locations = [
	//		{
	//			date: "01/15/2015 01:00",
	//			latitude: "0.1930217",
	//			longitude: "    37.42838 ",
	//			speed: "   0.95  ",
	//			altitude: "   1758    ",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 02:00",
	//			latitude: "0.1935267",
	//			longitude: "    37.42814 ",
	//			speed: "    0.6  ",
	//			altitude: "   1740",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 03:00",
	//			latitude: "0.194995 ",
	//			longitude: "   37.42784  ",
	//			speed: "  0.44   ",
	//			altitude: "  1728",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 04:00",
	//			latitude: "0.1965967",
	//			longitude: "    37.42878 ",
	//			speed: "    0.75 ",
	//			altitude: "    1735",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 05:00",
	//			latitude: "0.1973083",
	//			longitude: "    37.4302  ",
	//			speed: "   0.8   ",
	//			altitude: "  1723",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 06:00",
	//			latitude: "0.19845  ",
	//			longitude: "  37.43109   ",
	//			speed: "  0.53   ",
	//			altitude: "  1730",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 07:00",
	//			latitude: "0.1991417",
	//			longitude: "    37.43093 ",
	//			speed: "    2.75 ",
	//			altitude: "    1743",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 08:00",
	//			latitude: "0.1985617",
	//			longitude: "    37.43095 ",
	//			speed: "    0.16 ",
	//			altitude: "    1732",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 09:00",
	//			latitude: "0.19915  ",
	//			longitude: "  37.43229   ",
	//			speed: "  2.64   ",
	//			altitude: "  1712",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 10:00",
	//			latitude: "0.20118  ",
	//			longitude: "  37.43444   ",
	//			speed: " 0.66    ",
	//			altitude: " 1702",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 11:00",
	//			latitude: "0.2080233",
	//			longitude: "    37.45437 ",
	//			speed: "   0.44  ",
	//			altitude: "   1692",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 12:00",
	//			latitude: "0.2075533",
	//			longitude: "    37.45451 ",
	//			speed: "   1.18  ",
	//			altitude: "   1698",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 13:00",
	//			latitude: "0.2059167",
	//			longitude: "    37.45475 ",
	//			speed: "    0.66 ",
	//			altitude: "    1699",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 14:00",
	//			latitude: "0.205825 ",
	//			longitude: "   37.45463  ",
	//			speed: "   0.6   ",
	//			altitude: "  1694",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 15:00",
	//			latitude: "0.2059167",
	//			longitude: "    37.45559 ",
	//			speed: "    0.04 ",
	//			altitude: "    1693",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 16:00",
	//			latitude: "0.2059017",
	//			longitude: "    37.45564 ",
	//			speed: "    8.08 ",
	//			altitude: "    1695",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 17:00",
	//			latitude: "0.2060917",
	//			longitude: "    37.45607 ",
	//			speed: "   0.07  ",
	//			altitude: "   1705",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 18:00",
	//			latitude: "0.20601  ",
	//			longitude: "  37.4575    ",
	//			speed: " 5.44    ",
	//			altitude: " 1711",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 19:00",
	//			latitude: "0.20463  ",
	//			longitude: "  37.45936   ",
	//			speed: " 1.29    ",
	//			altitude: " 1664",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 20:00",
	//			latitude: "0.19838  ",
	//			longitude: "  37.45793   ",
	//			speed: "  0.07   ",
	//			altitude: "  1707",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 21:00",
	//			latitude: "0.1968217",
	//			longitude: "    37.45399 ",
	//			speed: "    0.67 ",
	//			altitude: "    1730",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 22:00",
	//			latitude: "0.1972833",
	//			longitude: "    37.45401 ",
	//			speed: "    2.49 ",
	//			altitude: "    1729",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/15/2015 23:00",
	//			latitude: "0.19718  ",
	//			longitude: "  37.45375   ",
	//			speed: "  0.44   ",
	//			altitude: "  1718",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 00:00",
	//			latitude: "0.19721  ",
	//			longitude: "  37.45371   ",
	//			speed: "  0.82   ",
	//			altitude: "  1689",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 01:00",
	//			latitude: "0.1977017",
	//			longitude: "    37.45314 ",
	//			speed: "    0.66 ",
	//			altitude: "    1774",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 02:00",
	//			latitude: "0.1977117",
	//			longitude: "    37.45375 ",
	//			speed: "    0.16 ",
	//			altitude: "    1702",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 03:00",
	//			latitude: "0.196995 ",
	//			longitude: "   37.45308  ",
	//			speed: "  2.71   ",
	//			altitude: "  1692",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 04:00",
	//			latitude: "0.1971633",
	//			longitude: "    37.45328 ",
	//			speed: "   1.06  ",
	//			altitude: "   1706",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 05:00",
	//			latitude: "0.19717  ",
	//			longitude: "  37.45299   ",
	//			speed: " 2.88    ",
	//			altitude: " 1703",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 06:00",
	//			latitude: "0.198045 ",
	//			longitude: "   37.45306  ",
	//			speed: "   0.53  ",
	//			altitude: "   1682",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 07:00",
	//			latitude: "0.19994  ",
	//			longitude: "  37.45407   ",
	//			speed: "  0.13   ",
	//			altitude: "  1713",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 08:00",
	//			latitude: "0.2015033",
	//			longitude: "    37.45492 ",
	//			speed: "    1.95 ",
	//			altitude: "    1710",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 09:00",
	//			latitude: "0.2037983",
	//			longitude: "    37.45367 ",
	//			speed: "    1.13 ",
	//			altitude: "    1710",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 10:00",
	//			latitude: "0.2045583",
	//			longitude: "    37.4506  ",
	//			speed: "   2.57  ",
	//			altitude: "   1704",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 11:00",
	//			latitude: "0.20426  ",
	//			longitude: "  37.45037   ",
	//			speed: "  3.09   ",
	//			altitude: "  1695",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 12:00",
	//			latitude: "0.203575 ",
	//			longitude: "   37.44682  ",
	//			speed: "   2.97  ",
	//			altitude: "   1718",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 13:00",
	//			latitude: "0.20224  ",
	//			longitude: "  37.44338   ",
	//			speed: "  2.93   ",
	//			altitude: "  1706",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 14:00",
	//			latitude: "0.2079   ",
	//			longitude: " 37.43264    ",
	//			speed: " 2.35    ",
	//			altitude: " 1703",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 15:00",
	//			latitude: "0.2055117",
	//			longitude: "    37.42708 ",
	//			speed: "    0.2  ",
	//			altitude: "   1705",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 16:00",
	//			latitude: "0.2054517",
	//			longitude: "    37.42714 ",
	//			speed: "  2.58   ",
	//			altitude: "  1713",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 17:00",
	//			latitude: "0.2056   ",
	//			longitude: " 37.42714    ",
	//			speed: " 0.35    ",
	//			altitude: " 1692",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 18:00",
	//			latitude: "0.2055266",
	//			longitude: "    37.42688 ",
	//			speed: "   3.2   ",
	//			altitude: "  1699",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 19:00",
	//			latitude: "0.2062267",
	//			longitude: "    37.42981 ",
	//			speed: "    0.87 ",
	//			altitude: "    1730",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 20:00",
	//			latitude: "0.2068033",
	//			longitude: "    37.43135 ",
	//			speed: "    0.11 ",
	//			altitude: "    1770",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 21:00",
	//			latitude: "0.2067967",
	//			longitude: "    37.43252 ",
	//			speed: "    0.16 ",
	//			altitude: "    1727",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 22:00",
	//			latitude: "0.2074883",
	//			longitude: "    37.43332 ",
	//			speed: "   0.33  ",
	//			altitude: "   1726",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/16/2015 23:00",
	//			latitude: "0.2069567",
	//			longitude: "    37.4273  ",
	//			speed: "   2.88  ",
	//			altitude: "   1722",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 00:00",
	//			latitude: "0.20417  ",
	//			longitude: "  37.42582   ",
	//			speed: "  3.04   ",
	//			altitude: "  1723",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 01:00",
	//			latitude: "0.198365 ",
	//			longitude: "   37.42342  ",
	//			speed: "   0.16  ",
	//			altitude: "   1736",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 02:00",
	//			latitude: "0.1981133",
	//			longitude: "    37.42329 ",
	//			speed: "    1.36 ",
	//			altitude: "    1762",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 03:00",
	//			latitude: "0.1985183",
	//			longitude: "    37.42316 ",
	//			speed: "   0.02  ",
	//			altitude: "   1722",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 04:00",
	//			latitude: "0.1986583",
	//			longitude: "    37.42306 ",
	//			speed: "    3.09 ",
	//			altitude: "    1669",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 05:00",
	//			latitude: "0.1988933",
	//			longitude: "    37.42306 ",
	//			speed: "    0.95 ",
	//			altitude: "    1761",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 06:00",
	//			latitude: "0.198975 ",
	//			longitude: "   37.4226   ",
	//			speed: "  0.13   ",
	//			altitude: "  1708",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 07:00",
	//			latitude: "0.200075 ",
	//			longitude: "   37.42324  ",
	//			speed: " 0.82    ",
	//			altitude: " 1728",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 08:00",
	//			latitude: "0.20103  ",
	//			longitude: "  37.4255    ",
	//			speed: " 0.2     ",
	//			altitude: " 748",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 09:00",
	//			latitude: "0.1975916",
	//			longitude: "    37.42716 ",
	//			speed: "    0.25 ",
	//			altitude: "    1672",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 10:00",
	//			latitude: "0.1969717",
	//			longitude: "    37.42768 ",
	//			speed: "    0.95 ",
	//			altitude: "    1700",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 11:00",
	//			latitude: "0.19707  ",
	//			longitude: "  37.42784   ",
	//			speed: "  0.16   ",
	//			altitude: "  1735",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 12:00",
	//			latitude: "0.1966883",
	//			longitude: "    37.42794 ",
	//			speed: "    0.71 ",
	//			altitude: "    1740",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 13:00",
	//			latitude: "0.1966917",
	//			longitude: "    37.42783 ",
	//			speed: "    0.75 ",
	//			altitude: "    1756",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 14:00",
	//			latitude: "0.1970383",
	//			longitude: "    37.42793 ",
	//			speed: "    0.35 ",
	//			altitude: "    1729",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 15:00",
	//			latitude: "0.1970783",
	//			longitude: "    37.42765 ",
	//			speed: "  1.29   ",
	//			altitude: "  1716",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 16:00",
	//			latitude: "0.1969517",
	//			longitude: "    37.42685 ",
	//			speed: "    0.82 ",
	//			altitude: "    1725",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 17:00",
	//			latitude: "0.19652  ",
	//			longitude: "  37.42758   ",
	//			speed: "  1.2    ",
	//			altitude: " 1756",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 18:00",
	//			latitude: "0.19637  ",
	//			longitude: "  37.42762   ",
	//			speed: "  0.16   ",
	//			altitude: "  1738",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 19:00",
	//			latitude: "0.195345 ",
	//			longitude: "   37.42731  ",
	//			speed: "  0.29   ",
	//			altitude: "  1721",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 20:00",
	//			latitude: "0.19539  ",
	//			longitude: "  37.42702   ",
	//			speed: "  0.53   ",
	//			altitude: "  1737",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 21:00",
	//			latitude: "0.19423  ",
	//			longitude: "  37.4266    ",
	//			speed: " 0.71    ",
	//			altitude: " 1718",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 22:00",
	//			latitude: "0.1974883",
	//			longitude: "    37.42539 ",
	//			speed: "    0.46 ",
	//			altitude: "    1694",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/17/2015 23:00",
	//			latitude: "0.1981183",
	//			longitude: "    37.42532 ",
	//			speed: "    0.07 ",
	//			altitude: "    1725",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 00:00",
	//			latitude: "0.198055 ",
	//			longitude: "   37.4249   ",
	//			speed: "  0.35   ",
	//			altitude: "  1744",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 01:00",
	//			latitude: "0.198015 ",
	//			longitude: "   37.42487  ",
	//			speed: "   0.31  ",
	//			altitude: "   1731",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 02:00",
	//			latitude: "0.1978467",
	//			longitude: "    37.42499 ",
	//			speed: "    0.35 ",
	//			altitude: "    1722",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 03:00",
	//			latitude: "0.1992983",
	//			longitude: "    37.42513 ",
	//			speed: "    0.13 ",
	//			altitude: "    1721",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 04:00",
	//			latitude: "0.2020283",
	//			longitude: "    37.42353 ",
	//			speed: "    0.6  ",
	//			altitude: "   1740",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 05:00",
	//			latitude: "0.202015 ",
	//			longitude: "   37.42342  ",
	//			speed: "   0.31  ",
	//			altitude: "   1725",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 06:00",
	//			latitude: "0.2020283",
	//			longitude: "    37.42304 ",
	//			speed: "    2.15 ",
	//			altitude: "    1727",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 07:00",
	//			latitude: "0.2027233",
	//			longitude: "    37.42236 ",
	//			speed: "   0.53  ",
	//			altitude: "   1734",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 08:00",
	//			latitude: "0.2020417",
	//			longitude: "    37.42349 ",
	//			speed: "   0.22  ",
	//			altitude: "   1732",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 09:00",
	//			latitude: "0.2023067",
	//			longitude: "    37.42481 ",
	//			speed: "   3.02  ",
	//			altitude: "   1724",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 10:00",
	//			latitude: "0.2044517",
	//			longitude: "    37.42601 ",
	//			speed: "    1.44 ",
	//			altitude: "    1691",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 11:00",
	//			latitude: "0.2028433",
	//			longitude: "    37.42633 ",
	//			speed: "  2.38   ",
	//			altitude: "  1737",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 12:00",
	//			latitude: "0.2015567",
	//			longitude: "    37.42699 ",
	//			speed: "    0.35 ",
	//			altitude: "    1737",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 13:00",
	//			latitude: "0.20142  ",
	//			longitude: "  37.42857   ",
	//			speed: "  0.87   ",
	//			altitude: "  1722",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 14:00",
	//			latitude: "0.201175 ",
	//			longitude: "   37.43101  ",
	//			speed: "  1.06   ",
	//			altitude: "  1664",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 15:00",
	//			latitude: "0.2007967",
	//			longitude: "    37.4304  ",
	//			speed: "  1.55   ",
	//			altitude: "  1741",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 16:00",
	//			latitude: "0.1996967",
	//			longitude: "    37.43195 ",
	//			speed: "   1.31  ",
	//			altitude: "   1772",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 17:00",
	//			latitude: "0.200865 ",
	//			longitude: "   37.43208  ",
	//			speed: "  4.53   ",
	//			altitude: "  1711",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 18:00",
	//			latitude: "0.2011383",
	//			longitude: "    37.43282 ",
	//			speed: "    0.62 ",
	//			altitude: "    1724",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 19:00",
	//			latitude: "0.200655 ",
	//			longitude: "   37.43058  ",
	//			speed: "   2.88  ",
	//			altitude: "   1714",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 20:00",
	//			latitude: "0.199    ",
	//			longitude: "37.42889     ",
	//			speed: " 22      ",
	//			altitude: " 22",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 21:00",
	//			latitude: "0.1988883",
	//			longitude: "    37.42809 ",
	//			speed: "    0.25 ",
	//			altitude: "    1729",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 22:00",
	//			latitude: "0.1987633",
	//			longitude: "    37.42793 ",
	//			speed: "   1.42  ",
	//			altitude: "   1743",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/18/2015 23:00",
	//			latitude: "0.2035917",
	//			longitude: "    37.42581 ",
	//			speed: "    2.4  ",
	//			altitude: "   1721",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 00:00",
	//			latitude: "0.20202  ",
	//			longitude: "  37.42336   ",
	//			speed: "  0.76   ",
	//			altitude: "  1687",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 01:00",
	//			latitude: "0.2017067",
	//			longitude: "    37.42288 ",
	//			speed: "    1.06 ",
	//			altitude: "    1733",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 02:00",
	//			latitude: "0.2016133",
	//			longitude: "    37.42272 ",
	//			speed: "    0.11 ",
	//			altitude: "    1720",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 03:00",
	//			latitude: "0.2014417",
	//			longitude: "    37.42262 ",
	//			speed: "   0.04  ",
	//			altitude: "   1739",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 04:00",
	//			latitude: "0.2016416",
	//			longitude: "    37.42247 ",
	//			speed: "    0.47 ",
	//			altitude: "    1734",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 05:00",
	//			latitude: "0.2017517",
	//			longitude: "    37.42275 ",
	//			speed: "    0.07 ",
	//			altitude: "    1729",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 06:00",
	//			latitude: "0.2021117",
	//			longitude: "    37.42336 ",
	//			speed: "    0.35 ",
	//			altitude: "    1719",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 07:00",
	//			latitude: "0.201905 ",
	//			longitude: "   37.4241   ",
	//			speed: "  0.2    ",
	//			altitude: " 1725",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 08:00",
	//			latitude: "0.2044833",
	//			longitude: "    37.42702 ",
	//			speed: "   0.86  ",
	//			altitude: "   1782",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 09:00",
	//			latitude: "0.2008317",
	//			longitude: "    37.4259  ",
	//			speed: "  0.2    ",
	//			altitude: " 1713",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 10:00",
	//			latitude: "0.19736  ",
	//			longitude: "  37.43002   ",
	//			speed: "  0.64   ",
	//			altitude: "  1731",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 11:00",
	//			latitude: "0.200125 ",
	//			longitude: "   37.43347  ",
	//			speed: "   0.76  ",
	//			altitude: "   1724",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 12:00",
	//			latitude: "0.2007067",
	//			longitude: "    37.43384 ",
	//			speed: "   0.22  ",
	//			altitude: "   1737",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 13:00",
	//			latitude: "0.2020417",
	//			longitude: "    37.43359 ",
	//			speed: "   0.44  ",
	//			altitude: "   1727",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 14:00",
	//			latitude: "0.202115 ",
	//			longitude: "   37.43037  ",
	//			speed: "   0.11  ",
	//			altitude: "   1720",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 15:00",
	//			latitude: "0.2041967",
	//			longitude: "    37.42647 ",
	//			speed: "    0.91 ",
	//			altitude: "    1708",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 16:00",
	//			latitude: "0.2042917",
	//			longitude: "    37.42631 ",
	//			speed: "    0.86 ",
	//			altitude: "    1687",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 17:00",
	//			latitude: "0.20494  ",
	//			longitude: "  37.42793   ",
	//			speed: "  2.73   ",
	//			altitude: "  1728",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 18:00",
	//			latitude: "0.20189  ",
	//			longitude: "  37.42891   ",
	//			speed: "  1.71   ",
	//			altitude: "  1718",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 19:00",
	//			latitude: "0.2019833",
	//			longitude: "    37.42878 ",
	//			speed: "    0.33 ",
	//			altitude: "    1716",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 20:00",
	//			latitude: "0.2007383",
	//			longitude: "    37.42789 ",
	//			speed: "    0.53 ",
	//			altitude: "    1732",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 21:00",
	//			latitude: "0.1990717",
	//			longitude: "    37.42867 ",
	//			speed: "    0.04 ",
	//			altitude: "    1723",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 22:00",
	//			latitude: "0.1991867",
	//			longitude: "    37.42873 ",
	//			speed: "    0.82 ",
	//			altitude: "    1739",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/19/2015 23:00",
	//			latitude: "0.19839  ",
	//			longitude: "  37.42833   ",
	//			speed: " 0.82    ",
	//			altitude: " 1735",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 00:00",
	//			latitude: "0.1974933",
	//			longitude: "    37.42821 ",
	//			speed: "    1.29 ",
	//			altitude: "    1790",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 01:00",
	//			latitude: "0.1959617",
	//			longitude: "    37.42999 ",
	//			speed: "    1.55 ",
	//			altitude: "    1731",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 02:00",
	//			latitude: "0.1959583",
	//			longitude: "    37.43009 ",
	//			speed: "    0.51 ",
	//			altitude: "    1734",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 03:01",
	//			latitude: "0.1960967",
	//			longitude: "    37.4301  ",
	//			speed: "   0.24  ",
	//			altitude: "   1755",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 05:00",
	//			latitude: "0.1961683",
	//			longitude: "    37.42999 ",
	//			speed: "    0.22 ",
	//			altitude: "    1716",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 06:00",
	//			latitude: "0.1963567",
	//			longitude: "    37.42964 ",
	//			speed: "    0.29 ",
	//			altitude: "    1749",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 07:00",
	//			latitude: "0.1987017",
	//			longitude: "    37.42898 ",
	//			speed: "    1.58 ",
	//			altitude: "    1753",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 08:00",
	//			latitude: "0.2005533",
	//			longitude: "    37.42733 ",
	//			speed: "  2.6    ",
	//			altitude: " 1704",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 09:00",
	//			latitude: "0.2025817",
	//			longitude: "    37.42649 ",
	//			speed: "    1.89 ",
	//			altitude: "    1562",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 10:01",
	//			latitude: "0.2008833",
	//			longitude: "    37.4271  ",
	//			speed: "  2.69   ",
	//			altitude: "  1712",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 11:00",
	//			latitude: "0.2014767",
	//			longitude: "    37.42865 ",
	//			speed: "    0.15 ",
	//			altitude: "    1725",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 12:00",
	//			latitude: "0.2018917",
	//			longitude: "    37.43018 ",
	//			speed: "    1.02 ",
	//			altitude: "    1693",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 13:00",
	//			latitude: "0.199935 ",
	//			longitude: "   37.43242  ",
	//			speed: "   4.35  ",
	//			altitude: "   1752",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 14:00",
	//			latitude: "0.1995667",
	//			longitude: "    37.43266 ",
	//			speed: "   0.6   ",
	//			altitude: "  1744",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 15:00",
	//			latitude: "0.1998333",
	//			longitude: "    37.43324 ",
	//			speed: "   0.35  ",
	//			altitude: "   1726",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 16:00",
	//			latitude: "0.19974  ",
	//			longitude: "  37.43084   ",
	//			speed: " 1.31    ",
	//			altitude: " 1757",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 17:00",
	//			latitude: "0.2001467",
	//			longitude: "    37.43032 ",
	//			speed: "   0.87  ",
	//			altitude: "   1657",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 18:00",
	//			latitude: "0.1997833",
	//			longitude: "    37.42779 ",
	//			speed: "    2.17 ",
	//			altitude: "    1683",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 19:00",
	//			latitude: "0.1985117",
	//			longitude: "    37.43071 ",
	//			speed: "   1.89  ",
	//			altitude: "   1752",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 20:00",
	//			latitude: "0.2016917",
	//			longitude: "    37.43328 ",
	//			speed: "    0.4  ",
	//			altitude: "   1806",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 21:00",
	//			latitude: "0.202985 ",
	//			longitude: "   37.43368  ",
	//			speed: "  0.6    ",
	//			altitude: " 1710",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 22:01",
	//			latitude: "0.2023433",
	//			longitude: "    37.43383 ",
	//			speed: "    2.75 ",
	//			altitude: "    1716",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/20/2015 23:00",
	//			latitude: "0.2006067",
	//			longitude: "    37.4321  ",
	//			speed: "  3.42   ",
	//			altitude: "  1722",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 00:01",
	//			latitude: "0.2004883",
	//			longitude: "    37.43113 ",
	//			speed: "    0.2  ",
	//			altitude: "   1721",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 01:00",
	//			latitude: "0.204625 ",
	//			longitude: "   37.42687  ",
	//			speed: "   0.58  ",
	//			altitude: "   1712",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 02:00",
	//			latitude: "0.20403  ",
	//			longitude: "  37.42406   ",
	//			speed: "  0.47   ",
	//			altitude: "  1718",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 04:00",
	//			latitude: "0.2041067",
	//			longitude: "    37.42408 ",
	//			speed: "    0.66 ",
	//			altitude: "    1743",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 05:00",
	//			latitude: "0.2039617",
	//			longitude: "    37.42382 ",
	//			speed: "   0.33  ",
	//			altitude: "   1672",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 06:00",
	//			latitude: "0.2035   ",
	//			longitude: " 37.42352    ",
	//			speed: " 0.33    ",
	//			altitude: " 1720",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 07:00",
	//			latitude: "0.2033533",
	//			longitude: "    37.42346 ",
	//			speed: "   0.82  ",
	//			altitude: "   1724",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 08:00",
	//			latitude: "0.20328  ",
	//			longitude: "  37.42327   ",
	//			speed: "  2.86   ",
	//			altitude: "  1723",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 09:00",
	//			latitude: "0.20195  ",
	//			longitude: "  37.42351   ",
	//			speed: " 0.07    ",
	//			altitude: " 1733",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 10:00",
	//			latitude: "0.2019367",
	//			longitude: "    37.42359 ",
	//			speed: "    4.24 ",
	//			altitude: "    1753",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 11:00",
	//			latitude: "0.2007567",
	//			longitude: "    37.42497 ",
	//			speed: "   0.6   ",
	//			altitude: "  1720",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 12:00",
	//			latitude: "0.20089  ",
	//			longitude: "  37.42562   ",
	//			speed: "  0.05   ",
	//			altitude: "  1742",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 13:00",
	//			latitude: "0.2014067",
	//			longitude: "    37.42853 ",
	//			speed: "    1.06 ",
	//			altitude: "    1726",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 14:00",
	//			latitude: "0.20142  ",
	//			longitude: "  37.42862   ",
	//			speed: " 0.76    ",
	//			altitude: " 1735",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 15:00",
	//			latitude: "0.2005783",
	//			longitude: "    37.42896 ",
	//			speed: "    1.55 ",
	//			altitude: "    1761",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 16:00",
	//			latitude: "0.1986917",
	//			longitude: "    37.43204 ",
	//			speed: "    1.2  ",
	//			altitude: "   1746",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 17:00",
	//			latitude: "0.19825  ",
	//			longitude: "  37.43242   ",
	//			speed: "  0.25   ",
	//			altitude: "  1768",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 18:00",
	//			latitude: "0.198175 ",
	//			longitude: "   37.43214  ",
	//			speed: "   0.4   ",
	//			altitude: "  1732",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 19:01",
	//			latitude: "0.196985 ",
	//			longitude: "   37.43021  ",
	//			speed: "   0.71  ",
	//			altitude: "   1728",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 20:00",
	//			latitude: "0.1960067",
	//			longitude: "    37.42921 ",
	//			speed: "    20.06",
	//			altitude: "     1644",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 21:00",
	//			latitude: "0.1955683",
	//			longitude: "    37.42934 ",
	//			speed: "    0.67 ",
	//			altitude: "    1742",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 22:00",
	//			latitude: "0.195195 ",
	//			longitude: "   37.42988  ",
	//			speed: "  1.06   ",
	//			altitude: "  1822",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/21/2015 23:00",
	//			latitude: "0.19558  ",
	//			longitude: "  37.42984   ",
	//			speed: " 0.71    ",
	//			altitude: " 1750",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 00:00",
	//			latitude: "0.1963133",
	//			longitude: "    37.42843 ",
	//			speed: "    0.07 ",
	//			altitude: "    1753",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 01:00",
	//			latitude: "0.1991167",
	//			longitude: "    37.42913 ",
	//			speed: "    12.27",
	//			altitude: "     1784",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 02:00",
	//			latitude: "0.19872  ",
	//			longitude: "  37.43      ",
	//			speed: " 58      ",
	//			altitude: " 15",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 03:00",
	//			latitude: "0.1981233",
	//			longitude: "    37.43109 ",
	//			speed: "    0.2  ",
	//			altitude: "   1720",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 04:00",
	//			latitude: "0.198155 ",
	//			longitude: "   37.43086  ",
	//			speed: "  0.46   ",
	//			altitude: "  1690",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 05:00",
	//			latitude: "0.1981317",
	//			longitude: "    37.43102 ",
	//			speed: "    0.56 ",
	//			altitude: "    1720",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 06:00",
	//			latitude: "0.19897  ",
	//			longitude: "  37.4309    ",
	//			speed: " 1.15    ",
	//			altitude: " 1713",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 07:00",
	//			latitude: "0.2013117",
	//			longitude: "    37.42914 ",
	//			speed: "    2.28 ",
	//			altitude: "    1734",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 08:00",
	//			latitude: "0.2013967",
	//			longitude: "    37.42876 ",
	//			speed: "    0.86 ",
	//			altitude: "    1731",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 09:00",
	//			latitude: "0.2017633",
	//			longitude: "    37.42813 ",
	//			speed: "    0.25 ",
	//			altitude: "    1716",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 10:00",
	//			latitude: "0.203805 ",
	//			longitude: "   37.42944  ",
	//			speed: "   0.86  ",
	//			altitude: "   1714",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 11:00",
	//			latitude: "0.2034167",
	//			longitude: "    37.42942 ",
	//			speed: "    0.71 ",
	//			altitude: "    1734",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 12:00",
	//			latitude: "0.2023833",
	//			longitude: "    37.4293  ",
	//			speed: "   1.27  ",
	//			altitude: "   1727",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 13:00",
	//			latitude: "0.20238  ",
	//			longitude: "  37.42937   ",
	//			speed: " 0.6     ",
	//			altitude: " 717",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 14:00",
	//			latitude: "0.2011083",
	//			longitude: "    37.43173 ",
	//			speed: "    0.33 ",
	//			altitude: "    1734",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 15:01",
	//			latitude: "0.1998083",
	//			longitude: "    37.43343 ",
	//			speed: "  0.35   ",
	//			altitude: "  1725",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 16:00",
	//			latitude: "0.1974767",
	//			longitude: "    37.43201 ",
	//			speed: "    1.4  ",
	//			altitude: "   1719",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 17:00",
	//			latitude: "0.1972117",
	//			longitude: "    37.43149 ",
	//			speed: "   0.69  ",
	//			altitude: "   1727",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 18:00",
	//			latitude: "0.1967867",
	//			longitude: "    37.4311  ",
	//			speed: "  0.76   ",
	//			altitude: "  1729",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 19:00",
	//			latitude: "0.1970283",
	//			longitude: "    37.43035 ",
	//			speed: "    0.87 ",
	//			altitude: "    1862",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 20:00",
	//			latitude: "0.19379  ",
	//			longitude: "  37.42666   ",
	//			speed: " 0.86    ",
	//			altitude: " 1744",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 21:00",
	//			latitude: "0.1932633",
	//			longitude: "    37.42695 ",
	//			speed: "   0.6   ",
	//			altitude: "  1689",
	//			animal: result._id
	//		},
	//		{
	//			date: "01/22/2015 23:00",
	//			latitude: "0.19003  ",
	//			longitude: "  37.42822   ",
	//			speed: " 1.13    ",
	//			altitude: " 1743",
	//			animal: result._id
	//		}
	//	];
	//	for(var i = 0; i<Locations.length;i++){
	//		var locationItem = Locations[i];
	//		keystone.list('Location').model(locationItem).save(function(err){
	//			console.log(err);
	//		});	
	//	}
	//	
	//});
    //
	



	// Render the view
	view.render('index');
	
};
