import { ScrollView, StyleSheet, Modal, Text, View, Button, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native';

const Tasks = ({ task }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const openModal = (task) => {
        setSelectedTask(task);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedTask(null);
    };

    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {task.map((task, index) => (
                    <View key={index} style={styles.box}>
                        <Text style={styles.h3}>{task.duty}</Text>
                        <Text numberOfLines={2} style={{ fontSize: 16, lineHeight: 24 }}>{task.description}</Text>
                        <Text
                            numberOfLines={2}
                            style={styles.h4}
                            onPress={() => openModal(task)}
                        >
                            Learn More
                        </Text>
                    </View>
                ))}
            </ScrollView>

            {/* Modal */}
            {selectedTask && (
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={closeModal}
                >
                    <TouchableWithoutFeedback onPress={closeModal}>
                        <View style={styles.modalContainer}>
                            <TouchableWithoutFeedback onPress={() => { }}>
                                <View style={styles.modalView}>
                                    <TouchableOpacity
                                        onPress={closeModal}
                                        style={styles.closeButton}>
                                        <AntDesign name="closecircleo" size={24} color="red" />
                                    </TouchableOpacity>
                                    <Text style={styles.h3}>{selectedTask.duty}</Text>
                                    <Text style={styles.h4}>{selectedTask.description}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
        </View>
    );
};

export default Tasks;

const styles = StyleSheet.create({
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10, 
        zIndex: 1, 
    },
    box: {
        width: 250,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: 300,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 32,
        fontWeight: "700",
        textAlign: 'center',
        lineHeight: 24,
    },
    h2: {
        fontSize: 24,
        fontWeight: "700",
        lineHeight: 24,
        color: "#38434D",
    },
    h3: {
        fontSize: 18.72,
        fontWeight: "700",
        lineHeight: 24,
    },
    h4: {
        fontSize: 16,
        fontWeight: "700",
        color: "#38434D",
        lineHeight: 24,
    },
    h5: {
        fontSize: 13.28,
        fontWeight: "700",
        lineHeight: 24,
    },
    h6: {
        fontSize: 10.72,
        lineHeight: 24,
        fontWeight: "700",
        color: "#38434D",
    },
});
