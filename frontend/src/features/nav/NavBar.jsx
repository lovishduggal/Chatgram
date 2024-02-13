import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useState } from 'react';
import { Add, Home, Search, Notifications } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const drawerWidth = 240;
function TopBar() {
    return (
        <AppBar
            color="inherit"
            position="fixed"
            sx={{
                boxShadow: 'none',
                borderBottom: 1,
                borderColor: 'grey.300',
                zIndex: 9999,
            }}
            enableColorOnDark>
            <Toolbar>
                <Box>
                    {' '}
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        fontFamily={'Dancing Script'}
                        fontWeight={'700'}>
                        Pictogram
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

function LeftDrawer() {
    const drawer = (
        <div>
            <Toolbar />

            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
        </div>
    );

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders">
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                    },
                }}
                open>
                {drawer}
            </Drawer>
        </Box>
    );
}

function BottomNav() {
    const [value, setValue] = useState('recents');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                width: 1,
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                borderTop: 1,
                borderColor: 'grey.300',
                display: { xs: 'block', sm: 'none' },
            }}>
            <Container>
                <BottomNavigation
                    sx={{
                        width: 1,
                    }}
                    value={value}
                    onChange={handleChange}>
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<Home />}
                        alt="Home"
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<Search />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<Add />}
                    />
                    <BottomNavigationAction
                        label="Folder"
                        value="folder"
                        icon={<Notifications />}
                    />
                    <BottomNavigationAction
                        label="Profile"
                        value="profile"
                        icon={
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 24, height: 24 }}
                            />
                        }
                    />
                </BottomNavigation>
            </Container>
        </Box>
    );
}

function NavBar() {
    return (
        <>
            <TopBar></TopBar>
            <Box sx={{ display: 'flex' }}>
                <LeftDrawer></LeftDrawer>
                <Container
                    component="main"
                    sx={{
                        flexGrow: 1,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                    }}>
                    <Toolbar />
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Rhoncus dolor purus non enim praesent
                        elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum
                        quisque non tellus. Convallis convallis tellus id
                        interdum velit laoreet id donec ultrices. Odio morbi
                        quis commodo odio aenean sed adipiscing. Amet nisl
                        suscipit adipiscing bibendum est ultricies integer quis.
                        Cursus euismod quis viverra nibh cras. Metus vulputate
                        eu scelerisque felis imperdiet proin fermentum leo.
                        Mauris commodo quis imperdiet massa tincidunt. Cras
                        tincidunt lobortis feugiat vivamus at augue. At augue
                        eget arcu dictum varius duis at consectetur lorem. Velit
                        sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac. Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Consectetur ex quas
                        soluta nulla fuga! Error illo corporis nulla consectetur
                        architecto dolorem aliquid iste eos deleniti ab
                        accusamus sed incidunt itaque natus molestias beatae
                        ipsum quod accusantium eius, similique voluptate?
                        Architecto rem amet excepturi sunt ratione vel esse
                        sequi atque. Suscipit veniam, expedita ullam fuga
                        pariatur maiores, molestias fugit labore modi minima
                        voluptatem vel, accusamus in nesciunt id. Expedita
                        beatae quasi illo cum corrupti temporibus distinctio
                        error atque odio porro itaque officia odit voluptatum
                        cupiditate quae voluptas unde obcaecati deleniti,
                        officiis minima dolorem voluptatibus, possimus magnam!
                        Eum ratione vitae aut blanditiis culpa sit rem quasi
                        saepe maxime modi architecto, vel porro. Fuga eaque
                        voluptatibus vitae ipsa soluta error autem sit nihil
                        nisi, fugit maxime voluptates, placeat quis magni,
                        doloremque nam laborum aspernatur dolor eveniet quasi
                        mollitia. Temporibus accusamus officia praesentium qui
                        odit et quod illo dolores, consequatur ut neque sunt
                        ratione eligendi cupiditate omnis sequi labore quae in.
                        Tenetur neque quae, illo fugit nihil quam earum
                        cupiditate sit magnam quos eum labore saepe rerum
                        doloremque alias rem enim. Voluptates unde ipsum cumque
                        tempore ut? Eos aliquam maxime dolores molestias
                        inventore. Deserunt, veritatis eligendi provident nam
                        voluptatem eum necessitatibus commodi. Suscipit
                        voluptate sapiente officia eaque totam sed nam modi,
                        aliquam deserunt atque vero nesciunt unde quo,
                        reiciendis eos rerum tempora amet dolorem officiis
                        consequatur ab, repudiandae dolorum earum. Voluptate
                        commodi pariatur, fuga repellat quis assumenda corporis
                        nemo, sint delectus dolor vitae! Ipsum tempora soluta,
                        minus earum odio repellat vitae hic quas doloremque
                        impedit excepturi possimus officiis quasi enim deleniti
                        assumenda cumque. Ut a dolorum dolore itaque dicta
                        molestias aspernatur, cupiditate tempore perferendis
                        soluta eius, animi distinctio deserunt odio ducimus
                        excepturi fuga expedita ratione vitae, ipsam assumenda
                        dolorem non architecto porro? Eos nobis hic sed
                        architecto, commodi dicta tenetur aut fuga inventore
                        distinctio asperiores magni? Amet, in exercitationem
                        aspernatur deserunt vero aperiam eos corrupti iusto
                        accusantium voluptate maxime illo quas et non dolore
                        praesentium doloremque laudantium sed maiores! Magnam
                        minima reiciendis nulla corrupti laborum unde animi.
                        Voluptas amet, ut quasi sequi repellat eveniet odit
                        molestias rem, quisquam repellendus accusantium? Earum,
                        nobis temporibus officiis dignissimos illum illo optio
                        eaque saepe quasi ab ullam, quas dolores. Unde
                        distinctio obcaecati expedita velit ea impedit rerum
                        sapiente aut quod hic voluptatem harum aliquid sed eius,
                        pariatur eligendi necessitatibus dignissimos est cumque?
                        Hic error quo praesentium id doloremque quis dolores
                        dignissimos quibusdam ex cum temporibus deserunt,
                        mollitia est eum. Quidem earum officiis excepturi
                        quaerat, quod deserunt sunt expedita aliquam aut,
                        quisquam nisi dolor cumque at iste sit exercitationem?
                        Asperiores quaerat dignissimos rerum sint quia eum atque
                        dolores? Aut reiciendis illo fugit unde, voluptates,
                        quis sapiente architecto sequi dolorum labore quae ut
                        corrupti molestias repellendus asperiores commodi
                        impedit autem error saepe maiores. Culpa harum sed
                        deserunt nam tempora ullam provident quod beatae,
                        nesciunt impedit iusto numquam quia aut aperiam. Omnis
                        rerum, quis sint harum saepe nam officiis sed
                        dignissimos, ducimus voluptates ut cumque voluptatibus
                        odit facere fugit maxime tenetur ipsam sunt at cum
                        dolorum culpa placeat. Ad possimus voluptatem
                        distinctio, blanditiis eum accusantium dolor totam
                        incidunt fuga temporibus ex laboriosam doloribus
                        adipisci obcaecati aut quam architecto quia veniam nobis
                        voluptates est. Amet praesentium odit quos reiciendis
                        dignissimos excepturi quam aliquam explicabo. Doloribus
                        itaque commodi, autem unde cum facilis ipsum rem
                        obcaecati libero recusandae repudiandae necessitatibus
                        praesentium exercitationem, ex quos neque? Delectus
                        atque iste at, eius quo necessitatibus. Minima dolores,
                        culpa aspernatur rerum minus commodi dolore illum
                        facilis libero! Blanditiis vitae atque sint sed nisi et
                        ullam necessitatibus dolor, commodi eaque, quo, itaque
                        molestias! Porro est nesciunt aliquam provident atque
                        vero sunt. Aliquam maiores minus fugiat quaerat!
                        Officiis modi recusandae facere totam voluptatibus
                        molestiae tenetur corrupti vero quibusdam ratione sunt
                        magni, praesentium architecto iusto temporibus! Ratione
                        iure quaerat ab assumenda consectetur perspiciatis,
                        nihil sapiente iste est quod dolorum. Veniam quia
                        sapiente autem placeat quas. Nobis id labore illum
                        facilis doloremque vero minima cumque consectetur
                        deserunt libero quisquam eaque nam quidem, repellat
                        laborum maxime et quia ratione pariatur quas nisi non
                        veniam suscipit. Accusamus pariatur fugit temporibus id
                        deserunt necessitatibus perspiciatis. Pariatur eum iusto
                        dolores nemo? Debitis eos animi quam ipsa, dignissimos
                        nostrum aliquid similique, officiis commodi deleniti
                        accusantium vitae aut velit minima quae ex! Repellendus
                        error sapiente aspernatur velit, nesciunt quos fugit
                        explicabo a? Ad quod ex assumenda necessitatibus veniam
                        ipsa officiis asperiores repudiandae minima. Tempora
                        unde consequuntur impedit. Dolorem reprehenderit quis
                        incidunt maxime, non ea veritatis quo laborum ipsum
                        rerum quod voluptatem in cum excepturi voluptatum
                        consectetur vitae. Veniam vitae ipsa nobis dolor facilis
                        ea, doloremque fugit ratione enim animi itaque esse
                        laborum nostrum quas quibusdam accusantium. Blanditiis
                        pariatur, esse rem consequatur alias beatae numquam
                        facilis, quo id, vero consectetur hic! Voluptatum
                        doloremque aspernatur impedit mollitia nihil placeat?
                        Quia sequi, cupiditate perspiciatis molestias
                        exercitationem dicta cum culpa eveniet tempora ex est,
                        ut quidem saepe? Distinctio fugiat dicta, neque ad
                        quibusdam modi tempore maiores accusamus veritatis dolor
                        similique delectus quidem explicabo ab nobis quisquam,
                        pariatur qui atque. Illum temporibus, velit illo
                        deserunt delectus repellendus hic voluptate earum ipsa
                        porro unde quam exercitationem maiores optio accusantium
                        eos enim ea, vel repudiandae nulla ullam animi neque
                        commodi! Saepe doloribus, est sed architecto molestias
                        corporis, eligendi ut tenetur corrupti iusto excepturi
                        esse magni, hic vitae sunt! Asperiores facilis
                        voluptatum dicta autem porro voluptatem voluptas
                        ratione, natus quasi voluptates nam sequi iusto sunt
                        sapiente temporibus ut optio deserunt dolores provident
                        accusamus. Amet fugit dicta aspernatur mollitia placeat
                        consequatur, in veritatis nesciunt incidunt excepturi!
                        Obcaecati hic voluptas nobis nemo quae. Vero blanditiis
                        cupiditate nesciunt veritatis modi officiis minima
                        reprehenderit voluptates praesentium voluptatum
                        exercitationem neque alias reiciendis, amet dolore
                        libero quasi. Voluptatum officia tempora neque ratione
                        voluptatem provident, rerum quae ex sed nisi, doloribus
                        aliquid dolor praesentium magni culpa quasi voluptas,
                        optio enim dolore! Eum fuga neque velit temporibus
                        doloremque vel esse accusamus, consequuntur
                        reprehenderit enim doloribus, illo blanditiis. Facilis,
                        molestias excepturi. Officiis non veniam laborum atque
                        vero, expedita explicabo maxime quia unde, quod, tempore
                        autem sint at beatae quam? Explicabo, et fuga eaque
                        distinctio alias deleniti facilis. Debitis pariatur
                        obcaecati, minus nemo ratione accusantium vero vitae
                        tempora quo. Vel voluptates molestiae quod facere natus
                        impedit, ea nobis obcaecati quis quas ut laboriosam
                        iste? Fugit eos deleniti facilis nihil tempore sequi
                        consequuntur suscipit amet adipisci, nostrum et dolor
                        non magnam dolorum odit in molestias porro. Iusto vel
                        eius praesentium consectetur laborum recusandae unde nam
                        ad dolorum quibusdam eaque, natus hic error omnis facere
                        sequi incidunt ea, veritatis neque ullam iure tempora
                        nihil fugit! Provident labore totam libero sunt at
                        veritatis nostrum quasi quis dolore! Beatae voluptates
                        provident rerum animi numquam dolor ratione sapiente
                        nobis, mollitia, in veniam quod commodi accusamus neque
                        soluta labore libero inventore. Architecto recusandae
                        amet dolorem ipsa. Quos magni quaerat minima, temporibus
                        consectetur inventore consequatur dolorem molestias quae
                        necessitatibus corrupti, hic explicabo iusto ratione
                        autem tempore odio reiciendis laudantium? Optio quasi
                        consectetur dolorum quod nulla dolor obcaecati delectus
                        quis aspernatur consequatur nihil sequi, quas ex unde
                        inventore a? Dolores rem a numquam sint, atque quibusdam
                        alias, nemo omnis esse corrupti quisquam? Repudiandae
                        quasi ad, iste suscipit vitae neque eaque sequi voluptas
                        sit vero similique tempora distinctio libero. Harum,
                        aliquid! Eaque, quo voluptatum. Corporis, quod. Placeat
                        cupiditate laboriosam quibusdam? Accusamus, illo. Quis,
                        deserunt at unde dicta optio animi alias praesentium
                        inventore, vero sit rerum consequatur eligendi est.
                        Magni quisquam modi exercitationem id, assumenda
                        deserunt facere error at vero corrupti. Eaque, beatae?
                        Ipsam ex iste quis, tenetur autem esse alias quam
                        temporibus porro officia pariatur enim voluptate, ad
                        explicabo? Asperiores, quas praesentium non ipsam
                        corporis, eius autem quae rem ea amet earum dicta quos
                        accusantium tempore provident tenetur inventore numquam
                        veritatis reiciendis cumque temporibus nostrum,
                        necessitatibus ullam impedit? Dolor distinctio
                        laboriosam, blanditiis inventore esse cumque voluptatem
                        quis repellat earum neque similique non id rem odio
                        maxime laudantium eum consectetur eligendi doloremque!
                        Ex asperiores sapiente est veritatis voluptatibus
                        similique illum vitae provident quisquam delectus itaque
                        illo cupiditate, enim amet corrupti, perferendis atque
                        quis, quibusdam ipsa in quaerat rerum facere. Soluta
                        aspernatur obcaecati fugit sequi odio, commodi at iste
                        veritatis quaerat quis, quod reprehenderit, eos repellat
                        perferendis. Vel possimus iste, facilis officia
                        voluptatem voluptas eos aliquam qui, numquam, eaque
                        tempora quos necessitatibus hic! Eligendi placeat illo
                        explicabo iure ex aperiam unde doloribus quibusdam
                        quaerat dolorem molestias deserunt molestiae temporibus
                        odit harum veniam adipisci neque similique voluptates
                        ducimus ipsam mollitia, ab fuga quo. Tempore totam
                        molestiae laboriosam aut quibusdam a aliquam, architecto
                        reiciendis maxime id. Corrupti nobis, repudiandae
                        eveniet voluptatum, assumenda aut neque quam perferendis
                        eum officiis qui suscipit consequuntur ex quis adipisci
                        non sit facere! Sint praesentium iusto tempore sit
                        aliquid libero minus qui accusamus! Dolorem commodi
                        molestias libero at voluptatibus obcaecati voluptas
                        suscipit ullam ex sit! Eius distinctio, saepe quos
                        repellat fugit praesentium ipsum facilis enim, obcaecati
                        tempora nostrum excepturi ipsa ratione quisquam non,
                        odit temporibus velit a consectetur natus officiis?
                        Adipisci tempora sint doloribus sed, mollitia illo
                        officia aut autem exercitationem unde. Autem, odio
                        numquam! Quia, ducimus tempora. Iusto accusantium nobis
                        perspiciatis doloribus minus illum aut facere eligendi
                        officia ratione provident eius inventore tempore dicta,
                        esse impedit! Placeat fuga eius magnam ducimus assumenda
                        aliquid, facere suscipit consequuntur vitae nemo
                        molestiae! Dicta nesciunt sapiente cum earum itaque
                        blanditiis, doloribus sint laudantium aliquam fugiat,
                        quis, ducimus repellendus quos laborum in officiis. Et
                        molestias blanditiis tempora vel cum quasi obcaecati qui
                        voluptas magnam quos ab reiciendis, harum sunt,
                        aspernatur dolor, quis veniam. Dolore ex quae atque
                        iusto impedit eum culpa saepe recusandae numquam dolorem
                        iure laboriosam eius amet illum vero, repudiandae earum
                        quis qui id iste non optio? Qui possimus inventore error
                        libero mollitia eum ipsum. Nobis voluptates commodi
                        dolores! Illum consequuntur fuga nam. Maxime debitis
                        laborum at, rem tempore sint, adipisci consequuntur ea
                        laboriosam ut harum obcaecati ab? Nostrum doloribus
                        beatae debitis atque ab vitae eaque impedit, consequatur
                        eum soluta ipsum? Voluptates molestias quisquam
                        architecto animi, voluptas facilis aperiam tempore
                        nostrum suscipit rem nisi, voluptatibus nemo. Ratione
                        dolor dolorum consectetur, delectus, ex aliquam
                        quibusdam nesciunt nostrum iste voluptatibus explicabo
                        cum ipsum inventore eum, eaque aspernatur officia quia
                        vitae est qui modi. Odio, exercitationem qui eaque
                        repudiandae libero, in ipsum soluta illum voluptates
                        aspernatur corrupti perferendis omnis, asperiores
                        placeat consectetur quam! Accusamus quod enim dolorem
                        doloribus deserunt rem debitis itaque ea quo! Ab aliquam
                        nobis optio est blanditiis enim cum delectus, voluptas
                        adipisci quibusdam labore ullam! Odit voluptate iure
                        repellendus recusandae modi earum nesciunt numquam quis
                        et perspiciatis sequi harum fugit exercitationem nulla a
                        corporis, iusto similique error ab est voluptates
                        dolorem dolores. Eos asperiores quae, reprehenderit
                        reiciendis iure, quod hic cum iste praesentium
                        voluptatem repellendus enim! Perferendis inventore
                        cupiditate impedit est minus ea eos magni veritatis.
                        Similique debitis incidunt reiciendis quod at, iste eum
                        in, cumque quidem error, veritatis eligendi quaerat.
                        Dolor id enim fuga inventore laudantium natus optio
                        earum, repudiandae ipsum eius impedit dignissimos ab
                        obcaecati voluptates atque! Veniam fugiat reiciendis nam
                        corrupti eius, porro, tenetur quod asperiores deleniti
                        laboriosam nisi voluptatibus, ea harum magnam aliquid
                        suscipit unde illum nobis officiis eligendi animi.
                        Molestiae, dolorum modi facere tempore sit quasi error
                        odio hic dignissimos quis cumque reiciendis dolor sed
                        doloremque illum, eveniet molestias nesciunt laborum
                        vero, voluptatum incidunt. Voluptatibus animi ab
                        asperiores nihil recusandae ut ducimus magni, ratione
                        excepturi aut nostrum amet. Itaque voluptatem dolor
                        voluptatum ipsum iste aliquid ullam cumque fugiat.
                        Aperiam, qui nesciunt? Doloribus consequuntur
                        dignissimos, quos quas deserunt aspernatur perferendis
                        eius commodi incidunt aperiam placeat fugit maiores illo
                        odit explicabo velit repellat tempore expedita atque
                        deleniti fuga impedit! Distinctio vel laboriosam velit
                        reiciendis perspiciatis quos corporis exercitationem
                        quas illum aspernatur, ullam, tenetur suscipit aliquam,
                        voluptatum natus tempore deserunt? Dolorum fugiat ullam
                        est reprehenderit recusandae. Laboriosam esse pariatur
                        voluptatum quisquam facere sequi explicabo, similique
                        neque deserunt. Eligendi hic adipisci, impedit dolorem
                        veniam dignissimos at nostrum suscipit commodi sequi.
                        Ex, ratione iste. Hic, quod ratione ipsam nam eaque
                        porro nulla debitis dolore assumenda? Asperiores id
                        quasi amet optio impedit atque libero quas non quis hic
                        vitae aliquid nesciunt, ut suscipit dignissimos corrupti
                        officia delectus numquam. Ad sapiente perferendis
                        necessitatibus dolorum, voluptas eveniet, aperiam
                        laudantium dignissimos neque placeat perspiciatis esse
                        unde magnam aspernatur velit odio consectetur rerum
                        obcaecati, beatae quos iste laboriosam aliquam! Eaque
                        aspernatur distinctio voluptatibus ab quia doloribus quo
                        esse iusto atque ad, ipsum nam voluptatem reiciendis ut,
                        fuga repellendus illo! Tempora perspiciatis quos nisi
                        voluptatem itaque ipsa non laboriosam corrupti, nulla
                        eos consectetur autem necessitatibus doloribus quam enim
                        ratione aliquid excepturi corporis aperiam. Pariatur
                        similique, totam eaque exercitationem architecto iusto
                        fuga, suscipit animi unde accusantium deserunt
                        voluptatum hic veniam blanditiis? Voluptas incidunt, nam
                        eos ex mollitia voluptatem. Doloremque perferendis in
                        deleniti ducimus, saepe laudantium sequi necessitatibus
                        quam, vel asperiores quod ex beatae est nihil aperiam
                        hic. Non quam, neque explicabo, aspernatur dolor
                        asperiores doloribus expedita ducimus atque quidem dicta
                        recusandae sed optio voluptatum hic cumque animi
                        nesciunt ullam sapiente excepturi omnis. Doloribus
                        dolorum vel animi omnis ut quo, labore exercitationem
                        iusto ipsa porro esse vitae architecto molestias facere
                        soluta voluptatem quasi. Praesentium nostrum suscipit
                        quae officiis. Iste et deleniti assumenda molestias
                        neque! Blanditiis atque exercitationem similique magni,
                        veritatis reiciendis laboriosam magnam deserunt
                        voluptates dolorem quod expedita possimus iusto? Vero
                        minus mollitia illo laboriosam ab, eaque quasi
                        recusandae, rem dolore, officiis atque libero temporibus
                        optio! Ex perspiciatis sint, minima iusto dolorem
                        maiores maxime quibusdam ullam tempora sit eveniet,
                        laudantium dignissimos nostrum necessitatibus culpa,
                        repellat aut unde earum cum illo soluta ea aspernatur
                        magnam. Vel porro voluptatibus voluptas aspernatur
                        suscipit, reiciendis illum rerum excepturi, voluptatem
                        laboriosam error quos. Odio, error numquam excepturi
                        nostrum voluptates ipsum quas soluta laboriosam deserunt
                        accusantium repellat asperiores ullam fuga debitis, quo
                        unde itaque atque commodi a. Necessitatibus nesciunt
                        asperiores nihil delectus laudantium nam neque cum porro
                        adipisci repellendus placeat at a quas, ea in fuga
                        minima expedita id eaque, voluptate vero possimus error.
                        Nihil dolores pariatur nostrum eum! In ducimus
                        consequuntur reprehenderit modi! Porro eaque libero
                        dolorum esse suscipit harum voluptate blanditiis
                        quibusdam placeat est consectetur unde aliquam minima
                        quidem sit iste, reprehenderit consequuntur repellendus
                        ipsa explicabo debitis pariatur laboriosam temporibus
                        exercitationem. Fugit est nemo nisi cupiditate voluptate
                        accusantium provident officia, pariatur tenetur velit
                        dolores vero ea ut quaerat unde fugiat veritatis quidem
                        deleniti amet tempore ducimus nobis asperiores totam?
                        Sed consequuntur aliquid possimus totam praesentium
                        doloremque, aspernatur optio nisi delectus adipisci
                        ratione voluptatem eius? Accusamus velit accusantium
                        perspiciatis deserunt doloribus sequi nobis totam vitae
                        modi. Adipisci, inventore? Est earum exercitationem
                        recusandae voluptatibus dolorem, adipisci iste
                        repellendus asperiores. Repudiandae fugiat voluptas quas
                        minus vel tempora itaque. Sed possimus quibusdam veniam
                        ipsa non blanditiis accusantium recusandae debitis enim,
                        dolorum corrupti dolorem, laboriosam, hic at maiores
                        assumenda. Sed totam consectetur possimus cum maiores
                        laboriosam voluptatibus tempore minus magni at, dolores
                        nam dolor expedita ipsa et, aliquam ex. Voluptatibus
                        iste distinctio architecto harum itaque dolore esse
                        cupiditate a? Perferendis officiis beatae velit optio
                        nihil eum repellat est vel, dignissimos quibusdam cum
                        eaque, unde qui reprehenderit nesciunt numquam ut,
                        maiores repellendus adipisci voluptatibus eligendi
                        similique totam quia tempora? Incidunt at suscipit fuga
                        eaque, quis maxime soluta libero consectetur quas, sunt
                        modi repellendus dolores doloremque! Laborum, nihil
                        voluptatem! Nisi, voluptate dolorum. Et, totam quas.
                        Dolorem in esse ut maxime labore, itaque totam facere
                        sint veritatis illum molestias harum ad aperiam, optio
                        debitis nesciunt, vero eum. Suscipit enim ut dignissimos
                        deleniti mollitia quibusdam placeat illo doloremque
                        laudantium facere incidunt illum, aut tempora iusto
                        impedit quia rerum explicabo aspernatur ducimus. Sint,
                        porro dolore perspiciatis, magni, mollitia ut! Suscipit
                        ducimus quam nobis eos voluptates molestias quidem nulla
                        alias ipsam, sed, quis dolores natus saepe inventore.
                        Cumque enim, accusantium, dolor accusamus repellat nobis
                        ab beatae deleniti adipisci sint corrupti! Error,
                        voluptatibus perferendis distinctio laboriosam
                        consequatur eius veniam fugiat aliquam dolores, aliquid
                        magni maxime. Atque sit fugit enim ex dolor, ipsum,
                        animi quae dolore provident iure natus quam laboriosam
                        inventore quo ipsam tenetur odio cupiditate minus eos,
                        architecto voluptatem veniam reiciendis nemo voluptatum?
                        Adipisci veritatis ipsum voluptas placeat id perferendis
                        aperiam omnis vero illum, ratione nostrum distinctio
                        recusandae labore laboriosam voluptatum unde cupiditate,
                        nihil culpa! Sed dolor provident et, fuga nobis quasi
                        repellendus quisquam tempora maxime aliquid vitae,
                        blanditiis enim natus architecto, maiores quod corporis
                        error rem doloribus atque id ea ratione. Cum repudiandae
                        nesciunt quae culpa eligendi nemo aliquam laudantium
                        alias cumque quo distinctio assumenda id fuga atque,
                        sapiente, sit dicta delectus nam eius! Atque dolorem
                        minus nobis unde dicta consectetur, sint libero rerum
                        quae iusto officiis, dolores ratione inventore veritatis
                        doloremque nemo a placeat maxime illo voluptates nulla
                        in! Illum excepturi saepe hic iure officia, vel modi nam
                        sit facilis alias, culpa, odit unde debitis esse
                        recusandae libero commodi maiores perferendis quo quis
                        eos architecto. Laborum, dolorem quibusdam vero, dolorum
                        quisquam consequatur voluptatibus incidunt labore
                        necessitatibus reiciendis aliquid, minima blanditiis?
                        Libero asperiores aspernatur molestias beatae at sunt
                        vero quia reprehenderit, explicabo, pariatur facilis
                        voluptas a officiis maxime rem, atque minima harum
                        architecto nulla quibusdam enim consequatur id eveniet.
                        Impedit ex eius deleniti, quis blanditiis sit explicabo
                        labore ducimus magnam illum aperiam accusantium nemo ea
                        nam quidem cum, in porro tempore, velit commodi.
                        Explicabo, neque quae ut ipsam nisi veniam, qui sit
                        animi id quidem at, iure architecto saepe odio assumenda
                        sint? Placeat maiores molestiae, libero nam labore sit
                        nihil exercitationem magnam odio provident totam ab et
                        culpa fugiat odit soluta reiciendis architecto, tempora
                        dolorem dolorum voluptatum vitae. Modi, nemo ut
                        excepturi ea hic assumenda facere ipsa labore minima
                        dolores praesentium eligendi vel incidunt dolorum
                        repudiandae autem deleniti. Mollitia deserunt blanditiis
                        maxime rerum asperiores sapiente aliquam fugit quisquam
                        eligendi. Commodi possimus repellendus corrupti.
                        Accusamus, dolor unde. Dicta facilis fugit veniam quis
                        deserunt, vitae quidem odio fugiat? Reprehenderit in
                        autem nesciunt commodi! Magnam error aliquid, veritatis
                        rem aliquam ad cum corporis perferendis cumque est
                        tempore quidem voluptatum doloremque exercitationem
                        magni, tenetur recusandae explicabo dolore corrupti eum
                        numquam quis pariatur excepturi provident? Ipsum neque
                        nam cupiditate dolor, hic perspiciatis sit asperiores ut
                        sequi totam esse recusandae expedita maiores, quia
                        eveniet earum repellat odio? Vitae dolorum culpa harum
                        doloremque, corporis similique quos distinctio quod
                        inventore repellat, est unde tempora eum eaque esse!
                        Consequuntur, veritatis, expedita quibusdam eos fugiat
                        voluptate at quia labore, consectetur dolor inventore.
                        Error aliquid asperiores molestias veritatis vitae quae
                        explicabo tempora eum saepe nulla, rem sed animi magni
                        culpa accusamus illum vero perspiciatis! Ullam modi,
                        laboriosam enim nihil tenetur repellendus possimus,
                        accusamus, autem voluptas perspiciatis quo nemo quae vel
                        aliquid amet veniam excepturi alias quia asperiores
                        exercitationem ut. Quos, expedita vero! Assumenda ipsa
                        ipsum, eos odit, a quae nam, atque tempora voluptatum
                        quod officia explicabo. Accusantium fugiat repudiandae
                        sed totam est suscipit nam possimus natus sapiente,
                        maiores facilis vitae deleniti amet, in magnam
                        recusandae tenetur dolor ea voluptate. Assumenda
                        sapiente alias veritatis aliquam ab consequatur enim
                        sequi aliquid doloremque ex, rem praesentium a, quidem
                        quam, omnis earum minus ut necessitatibus vero et! Culpa
                        voluptatem explicabo debitis, nihil, corporis saepe
                        nobis eligendi ut voluptatibus accusamus cum provident
                        reprehenderit at voluptatum neque repellat sed ipsa
                        aliquam impedit temporibus aspernatur. Commodi animi
                        nisi minus fuga molestiae dicta assumenda corporis neque
                        molestias voluptatibus voluptatem, distinctio veritatis
                        nostrum possimus, sed ipsam maiores veniam! Corrupti
                        dignissimos aspernatur doloremque natus quasi
                        perspiciatis impedit pariatur rem. Repudiandae cum id
                        inventore qui deleniti consequatur quos, sunt labore
                        quasi neque nobis nostrum aliquid fugit eveniet ratione
                        vitae, odit nulla facilis atque modi tempore enim?
                        Asperiores fugiat distinctio quisquam dicta? Eveniet
                        assumenda expedita perspiciatis fuga, vitae culpa.
                        Provident ducimus quia, recusandae fugit repudiandae ex.
                        Accusamus aspernatur sequi nobis enim molestias omnis
                        deleniti dolorum saepe et autem, quas exercitationem
                        magnam unde sunt distinctio, id dolor necessitatibus.
                        Nisi repudiandae alias quia, delectus, fugiat maiores
                        adipisci perspiciatis placeat qui recusandae voluptas
                        provident obcaecati non harum voluptatem suscipit iste?
                        Ullam aliquid magnam veritatis asperiores magni minima
                        accusantium rem culpa in, numquam quos obcaecati
                        consequuntur quas impedit sit eveniet tempora iste
                        necessitatibus vitae dolorem neque explicabo! Molestiae
                        quibusdam unde dolorum! Sunt dolorum eveniet, cupiditate
                        tempora error dolore amet magni inventore? Commodi saepe
                        magni porro labore beatae minima officiis eligendi iste,
                        blanditiis nihil modi deserunt debitis!
                    </Typography>
                </Container>
            </Box>
            <BottomNav></BottomNav>
        </>
    );
}

export default NavBar;
