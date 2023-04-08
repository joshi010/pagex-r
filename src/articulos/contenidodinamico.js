import React, { lazy } from "react";
import { useParams } from "react-router";



const CenterDiv = lazy(() => import('./arts/centrar-div'));
const Default = lazy(() => import('./arts/default'));
const PrincipSeo = lazy(() => import('./arts/seoPrincipiantes'));
const WebPrincipiantes = lazy(() => import('./arts/webPrincipiantes'));
const DiferenciasWebAppYNo = lazy(() => import('./arts/diferenciasEstaticaYNo'));
const HostingOptions = lazy(() => import('./arts/hostingOptions'));
const ComNetEdu = lazy(() => import('./arts/com-net-edu'));
const ReacAngular = lazy(() => import('./arts/react-vs-angular'));
const MonetizarVyD = lazy(() => import('./arts/monetizar-vyd'));
const GitGithub = lazy(() => import('./arts/git-gihub'));
const LandingArt = lazy(() => import('./arts/landing'));

export default function ContenidoDinamico(){
    const { articulo } = useParams();

    switch(articulo) {
        case 'centrar-un-div': return <CenterDiv />
        case 'seo-una-guía-para-principiantes': return <PrincipSeo />
        case 'css-js-html-principiantes': return <WebPrincipiantes />
        case 'web-app-y-static-pages' : return <DiferenciasWebAppYNo />
        case 'clasificando-hostings': return <HostingOptions />
        case 'clases-de-dominios-basico': return <ComNetEdu />
        case 'comparacion-frameworks-angular-react': return <ReacAngular />
        case 'monetizar-ventaja-desventaja': return <MonetizarVyD />
        case 'git-git-hub-guia' : return <GitGithub />
        case 'como-have-buena-landing-page': return <LandingArt />

        default: return <Default />
    }
    

    
}