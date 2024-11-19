import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './MenuStyle.js';
import { CheckBox } from 'react-native-elements';

const MenuHSI = ({navigation}) => {
    const [sectionOffsets, setSectionOffsets] = useState({});
    const scrollRef = useRef(null);

    useEffect(() => {
        const calculateSectionOffsets = () => {
            const newOffsets = {};
            ['hoje', 'semana', 'importante'].forEach(section => {
                if (sectionRefs[section] && sectionRefs[section].current) {
                    sectionRefs[section].current.measureLayout(
                        scrollRef.current.getInnerViewNode(),
                        (x, y) => {
                            newOffsets[section] = y;
                            setSectionOffsets({ ...newOffsets });
                        }
                    );
                }
            });
        };

        calculateSectionOffsets();
    }, []);

    const scrollToSection = (section) => {
        if (sectionOffsets[section] !== undefined) {
            scrollRef.current.scrollTo({ y: sectionOffsets[section], animated: true });
        }
    };

    const sectionRefs = {
        hoje: useRef(null),
        semana: useRef(null),
        importante: useRef(null),
    };

    const [checkedItems, setCheckedItems] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
    });

    const handleCheckBox = (itemName) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [itemName]: !prevState[itemName],
        }));
    };

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.containerHSI}>
                <TouchableOpacity onPress={() => scrollToSection('hoje')}>
                    <View style={styles.containerHoje}>
                        <Text style={styles.textMenu}>Hoje</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => scrollToSection('semana')}>
                    <View style={styles.containerSemana}>
                        <Text style={styles.textMenu}>Semana</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => scrollToSection('importante')}>
                    <View style={styles.containerImport}>
                        <Text style={styles.textMenu}>Importante</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView ref={scrollRef}>
                <View ref={sectionRefs.hoje} style={styles.ativHoje}>
                    <Text style={styles.textAtivHoje}>Atividades de Hoje</Text>
                </View>
                
                <View style={styles.containerTarefa}>
                    <View style={styles.containerData}>
                        <Text style={styles.data}> 09/05 </Text>
                        <Text style={styles.data}> Quinta-Feira </Text>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.componentes}>
                            <View style={styles.containerComp}>
                                <CheckBox
                                    checked={checkedItems.item1}
                                    onPress={() => handleCheckBox('item1')}
                                    checkedColor='white'
                                    uncheckedColor='white'
                                />
                                <View style={styles.containerTitulo}>
                                    <Text style={styles.titulo}>08:00</Text>
                                    <Text style={styles.titulo2}>Apresentação SENAI</Text>
                                </View>
                            </View>

                            <View style={styles.containerEdit}>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit} resizeMode='contain' source={require('../../assets/images/lapisbranco.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit2} resizeMode='contain' source={require('../../assets/images/lixobrancodois.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.descricao}>
                            <Text style={styles.desc}> Descrição................. </Text>
                        </View>

                    </View>
                </View>

                {/* Adicione o restante dos itens de tarefa de hoje aqui */}

                <View ref={sectionRefs.semana} style={styles.ativSemana}>
                    <Text style={styles.textAtivSemana}>Atividades da Semana</Text>
                </View>
                <View style={styles.containerTarefa}>
                    <View style={styles.containerData}>
                        <Text style={styles.data}> 10/05 </Text>
                        <Text style={styles.data}> Sexta-Feira </Text>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.componentes}>
                            <View style={styles.containerComp}>
                                <CheckBox
                                    checked={checkedItems.item2}
                                    onPress={() => handleCheckBox('item2')}
                                    checkedColor='white'
                                    uncheckedColor='white'
                                />
                                <View style={styles.containerTitulo}>
                                    <Text style={styles.titulo}>09:00</Text>
                                    <Text style={styles.titulo2}>Reunião de equipe</Text>
                                </View>
                            </View>

                            <View style={styles.containerEdit}>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit} resizeMode='contain' source={require('../../assets/images/lapisbranco.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit2} resizeMode='contain' source={require('../../assets/images/lixobrancodois.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.descricao}>
                            <Text style={styles.desc}> Descrição................. </Text>
                        </View>

                    </View>
                </View>

                {/* Adicione mais itens de tarefa para a semana aqui */}

                <View style={styles.containerTarefa}>
                    <View style={styles.containerData}>
                        <Text style={styles.data}> 11/05 </Text>
                        <Text style={styles.data}> Sábado </Text>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.componentes}>
                            <View style={styles.containerComp}>
                                <CheckBox
                                    checked={checkedItems.item3}
                                    onPress={() => handleCheckBox('item3')}
                                    checkedColor='white'
                                    uncheckedColor='white'
                                />
                                <View style={styles.containerTitulo}>
                                    <Text style={styles.titulo}>10:00</Text>
                                    <Text style={styles.titulo2}>Preparar relatório</Text>
                                </View>
                            </View>

                            <View style={styles.containerEdit}>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit} resizeMode='contain' source={require('../../assets/images/lapisbranco.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit2} resizeMode='contain' source={require('../../assets/images/lixobrancodois.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.descricao}>
                            <Text style={styles.desc}> Descrição................. </Text>
                        </View>

                    </View>
                </View>

                {/* Adicione mais itens de tarefa para a semana aqui */}

                <View ref={sectionRefs.importante} style={styles.ativImport}>
                    <Text style={styles.textAtivImport}>Atividades Importantes</Text>
                </View>
                <View style={styles.containerTarefa3}>
                    <View style={styles.containerData}>
                        <Text style={styles.data}> 12/05 </Text>
                        <Text style={styles.data}> Domingo </Text>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.componentes}>
                            <View style={styles.containerComp}>
                                <CheckBox
                                    checked={checkedItems.item4}
                                    onPress={() => handleCheckBox('item4')}
                                    checkedColor='white'
                                    uncheckedColor='white'
                                />
                                <View style={styles.containerTitulo}>
                                    <Text style={styles.titulo}>11:00</Text>
                                    <Text style={styles.titulo2}>Revisar proposta</Text>
                                </View>
                            </View>

                            <View style={styles.containerEdit}>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit} resizeMode='contain' source={require('../../assets/images/lapisbranco.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit2} resizeMode='contain' source={require('../../assets/images/lixobrancodois.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.descricao}>
                            <Text style={styles.desc}> Descrição................. </Text>
                        </View>

                    </View>
                </View>

                {/* Adicione mais itens de tarefa importantes aqui */}

                <View style={styles.containerTarefa3}>
                    <View style={styles.containerData}>
                        <Text style={styles.data}> 13/05 </Text>
                        <Text style={styles.data}> Segunda-Feira </Text>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.componentes}>
                            <View style={styles.containerComp}>
                                <CheckBox
                                    checked={checkedItems.item5}
                                    onPress={() => handleCheckBox('item5')}
                                    checkedColor='white'
                                    uncheckedColor='white'
                                />
                                <View style={styles.containerTitulo}>
                                    <Text style={styles.titulo}>12:00</Text>
                                    <Text style={styles.titulo2}>Apresentar projeto</Text>
                                </View>
                            </View>

                            <View style={styles.containerEdit}>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit} resizeMode='contain' source={require('../../assets/images/lapisbranco.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.editButton}>
                                    <Image style={styles.fotoEdit2} resizeMode='contain' source={require('../../assets/images/lixobrancodois.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.descricao}>
                            <Text style={styles.desc}> Descrição................. </Text>
                        </View>

                    </View>
                </View>

                {/* Adicione mais itens de tarefa importantes aqui */}
            </ScrollView>
            <View style={styles.containerLogos}>
                <TouchableOpacity style={styles.containerMenu} onPress={() => navigation.navigate('MenuHSI')}>
                    <Image style={styles.menu} resizeMode='contain' source={require('../../assets/images/menu.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerCalen} onPress={() => navigation.navigate('Calendario')}>
                    <Image style={styles.iconeCalen} resizeMode='contain' source={require('../../assets/images/iconeCalen.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.containerPerfil} onPress={() => navigation.navigate('Perfil')}>
                    <Image style={styles.perfil} resizeMode='contain' source={require('../../images_perfil/foto_perfil.jpg')} />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default MenuHSI;